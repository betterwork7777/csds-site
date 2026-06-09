import { NextResponse } from "next/server";
import vision from "@google-cloud/vision";

export async function POST(request: Request) {
  try {
    const { fileBase64 } = await request.json();

    if (!fileBase64) {
      return NextResponse.json(
        { success: false, message: "Missing fileBase64" },
        { status: 400 }
      );
    }

    const cleanBase64 = fileBase64.split(",").pop();

    const credentials = JSON.parse(
      process.env.GOOGLE_VISION_CREDENTIALS || "{}"
    );

    const client = new vision.ImageAnnotatorClient({ credentials });

    const [result] = await client.textDetection({
      image: {
        content: cleanBase64,
      },
    });

    const text = result.textAnnotations?.[0]?.description || "No text found";

    return NextResponse.json({
      success: true,
      extractedText: text,
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
