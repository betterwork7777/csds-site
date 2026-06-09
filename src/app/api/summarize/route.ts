import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        {
          success: false,
          message: "No text provided",
        },
        { status: 400 }
      );
    }

    const summary = `
Category: Document Review

Summary:
This document was successfully processed.

Extracted Text Length:
${text.length} characters

Recommended Next Step:
Review the extracted text and identify important dates, deadlines, amounts, and sender information.
`;

    return NextResponse.json({
      success: true,
      summary,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Summary failed",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
