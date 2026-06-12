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
    const referenceMatch =
  text.match(/account\s*number[-:\s]*([A-Z0-9-]{4,})/i) ||
  text.match(/account\s+([A-Z0-9-]{4,})/i) ||
  text.match(/case\s*number[-:\s]*([A-Z0-9-]{4,})/i) ||
  text.match(/reference\s*number[-:\s]*([A-Z0-9-]{4,})/i) ||
  text.match(/notice\s*number[-:\s]*([A-Z0-9-]{4,})/i) ||
  text.match(/client\s*id[-:\s]*([A-Z0-9-]{4,})/i);

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

const senderCandidates = lines.filter(
  (line: string) =>
    /(inc\.|llc|corp\.|corporation|department|agency|office|management|accounts|receivable)/i.test(
      line
    ) &&
    !line.toLowerCase().includes("your contact information")
);

const possibleSender =
  senderCandidates[senderCandidates.length - 1] || "Not detected";

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
let recommendedNextStep =
  "Review the extracted text and verify any dates, deadlines, balances, names, and instructions.";

if (category === "Debt & Collections") {
  recommendedNextStep =
    "Verify the balance, account number, and creditor information. Consider requesting debt validation if appropriate.";
}

if (category === "Housing & Rent") {
  recommendedNextStep =
    "Review any deadlines, notices, lease terms, and landlord instructions carefully.";
}

if (category === "Government & Benefits") {
  recommendedNextStep =
    "Review eligibility requirements, deadlines, notices, and any requested documents.";
}
   let documentSummary =
  "This document was successfully processed.";

if (category === "Debt & Collections") {
  documentSummary =
    `This appears to be a collection notice from ${possibleSender}. The document references account ${referenceFound}, reports a balance of ${amountFound}, and includes contact information for the creditor.`;
}

if (category === "Housing & Rent") {
  documentSummary =
    `This appears to be a housing or rental document. Review all notices, dates, and instructions carefully.`;
}

if (category === "Government & Benefits") {
  documentSummary =
    `This appears to be a government or benefits-related notice. Review any eligibility requirements, requested documents, and deadlines.`;
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
${recommendedNextStep}
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
