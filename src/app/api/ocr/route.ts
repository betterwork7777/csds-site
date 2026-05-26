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

    return NextResponse.json({
      success: true,
      message: "Google Vision client connected successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Google Vision connection failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
