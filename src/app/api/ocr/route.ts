import { NextResponse } from "next/server";
import vision from "@google-cloud/vision";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://brjxclxlptwjzawevzwx.supabase.co",
  "sb_publishable_modA-En_NPTxFcUOHSjVdA_mzK2-Dpy"
);

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "OCR route is live",
  });
}

export async function POST(request: Request) {
  try {
    const { filePath } = await request.json();

    if (!filePath) {
      return NextResponse.json(
        { success: false, message: "Missing filePath" },
        { status: 400 }
      );
    }

    const { data } = supabase.storage
      .from("debt-documents")
      .getPublicUrl(filePath);

    const publicUrl = data.publicUrl;

    console.log("OCR public URL:", publicUrl);

    const credentials = JSON.parse(
      process.env.GOOGLE_VISION_CREDENTIALS || "{}"
    );

    const client = new vision.ImageAnnotatorClient({
      credentials,
    });

    const [result] = await client.textDetection({
      image: {
        source: {
          imageUri: publicUrl,
        },
      },
    });

    const detections = result.textAnnotations;
    const text = detections?.[0]?.description || "No text found";

    return NextResponse.json({
      success: true,
      extractedText: text,
      filePath,
      publicUrl,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Google Vision OCR failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
