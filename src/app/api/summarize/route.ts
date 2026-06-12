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
    const phoneMatch = text.match(
  /\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/
);

const phoneFound = phoneMatch
  ? phoneMatch[0]
  : "Not detected";

const emailMatch = text.match(
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
);

const emailFound = emailMatch
  ? emailMatch[0]
  : "Not detected";

const websiteMatches = text.match(
  /\b(?:https?:\/\/)?(?:www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\b/g
);

const websiteFound = websiteMatches
  ? websiteMatches[websiteMatches.length - 1]
  : "Not detected";
    const referenceMatch = text.match(
  /\b(?:account|acct|account number|case|case number|reference|reference number|notice number|client id)[^A-Z0-9]*([A-Z0-9]{4,})/i
);

const referenceFound = referenceMatch
  ? referenceMatch[1]
  : "Not detected";
    const deadlineMatch = text.match(
  /\b(?:due date|deadline|respond by|submit by|pay by)[\s:]*([A-Za-z]+\s+\d{1,2},?\s+\d{4})/i
);

const deadlineFound = deadlineMatch
  ? deadlineMatch[1]
  : "Not detected";
    const lines = text
  .split("\n")
  .map((line: string) => line.trim())
  .filter((line: string) => line.length > 0);

const possibleSender =
  lines.find((line: string) =>
    /(inc\.|llc|corp\.|corporation|company|department|agency|office|apartments|management|collections|services)/i.test(
      line
    )
  ) || "Not detected";

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

Sender:
${possibleSender}

Amount Found:
${amountFound}

Possible Date:
${dateFound}

Deadline / Due Date:
${deadlineFound}

Phone Found:
${phoneFound}

Email Found:
${emailFound}

Website Found:
${websiteFound}

Reference Found:
${referenceFound}

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
