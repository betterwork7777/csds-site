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
        {
          success: false,
          message: "Missing filePath",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.storage
      .from("debt-documents")
      .download(filePath);

    if (error || !data) {
      return NextResponse.json(
        {
          success: false,
          message: "Could not download file from Supabase",
          error: error?.message || "No file data returned",
        },
        { status: 500 }
      );
    }

    const arrayBuffer = await data.arrayBuffer();

    console.log("OCR file path:", filePath);
    console.log("OCR file size:", arrayBuffer.byteLength);

    const base64File = Buffer.from(arrayBuffer).toString("base64");

    const credentials = JSON.parse(
      process.env.GOOGLE_VISION_CREDENTIALS || "{}"
    );

    const client = new vision.ImageAnnotatorClient({
      credentials,
    });

    const [result] = await client.textDetection({
      image: {
        content: base64File,
      },
    });

    const detections = result.textAnnotations;
    const text = detections?.[0]?.description || "No text found";

    console.log("OCR text length:", text.length);
    console.log("OCR text preview:", text.slice(0, 200));

    return NextResponse.json({
      success: true,
      extractedText: text,
      filePath,
      fileSize: arrayBuffer.byteLength,
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
