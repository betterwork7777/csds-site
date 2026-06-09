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

    const lowerText = text.toLowerCase();

    let category = "General Document";

    if (
      lowerText.includes("collection") ||
      lowerText.includes("debt") ||
      lowerText.includes("creditor") ||
      lowerText.includes("balance due") ||
      lowerText.includes("payment demand")
    ) {
      category = "Debt & Collections";
    } else if (
      lowerText.includes("rent") ||
      lowerText.includes("landlord") ||
      lowerText.includes("eviction") ||
      lowerText.includes("lease") ||
      lowerText.includes("tenant")
    ) {
      category = "Housing & Rent";
    } else if (
      lowerText.includes("dshs") ||
      lowerText.includes("snap") ||
      lowerText.includes("abd") ||
      lowerText.includes("medicaid") ||
      lowerText.includes("benefits") ||
      lowerText.includes("eligibility")
    ) {
      category = "Government & Benefits";
    }

    const summary = `
Category: ${category}

Summary:
This document was successfully processed.

Extracted Text Length:
${text.length} characters

Recommended Next Step:
Review the extracted text and look for important dates, deadlines, names, amounts, sender information, and response instructions.
`;

    return NextResponse.json({
      success: true,
      summary,
      category,
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
