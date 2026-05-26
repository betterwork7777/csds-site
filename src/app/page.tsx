import { NextResponse } from "next/server";
import vision from "@google-cloud/vision";

export async function GET() {
  return Response.json({
    success: true,
    message: "OCR route is live",
  });
}

export async function POST() {
  try {
    const credentials = JSON.parse(
      process.env.GOOGLE_VISION_CREDENTIALS || "{}"
    );

    const client = new vision.ImageAnnotatorClient({
      credentials,
    });

    const [result] = await client.textDetection({
      image: {
        source: {
          imageUri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Declaration_of_Independence_%281819%29.jpg/800px-Declaration_of_Independence_%281819%29.jpg",
        },
      },
    });

    const detections = result.textAnnotations;
    const text = detections?.[0]?.description || "No text found";

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
