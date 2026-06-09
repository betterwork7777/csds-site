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
    const amountMatch =
  text.match(/\$\s?\d[\d,]*(\.\d{2})?/) ||
  text.match(/\d[\d,]*(\.\d{2})?\s*dollars?/i);

const amountFound = amountMatch
  ? amountMatch[0]
  : "Not detected";

const dateMatch =
  text.match(
    /\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2},?\s+\d{4}\b/i
  );

const dateFound = dateMatch
  ? dateMatch[0]
  : "Not detected";

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

Amount Found:
${amountFound}

Possible Date:
${dateFound}

Summary:
This document was successfully processed.

Recommended Next Step:
Review the extracted text and verify any dates, deadlines, balances, names, and instructions.
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
