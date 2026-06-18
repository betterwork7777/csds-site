import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

    const amountFound = amountMatch ? amountMatch[0] : "Not detected";

    const dateMatch = text.match(
      /\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2},?\s+\d{4}\b/i
    );

    const dateFound = dateMatch ? dateMatch[0] : "Not detected";

    const phoneMatch = text.match(
      /\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/
    );

    const phoneFound = phoneMatch ? phoneMatch[0] : "Not detected";

    const emailMatch = text.match(
      /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
    );

    const emailFound = emailMatch ? emailMatch[0] : "Not detected";

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

    const referenceFound = referenceMatch ? referenceMatch[1] : "Not detected";

    const deadlineMatch = text.match(
      /\b(?:due date|deadline|respond by|submit by|pay by)[\s:]*([A-Za-z]+\s+\d{1,2},?\s+\d{4})/i
    );

    const deadlineFound = deadlineMatch ? deadlineMatch[1] : "Not detected";

    const lines = text
      .split("\n")
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0);

    const senderCandidates = lines.filter(
      (line: string) =>
        /(inc\.|llc|corp\.|corporation|department|agency|office|management|accounts|receivable)/i.test(
          line
        ) && !line.toLowerCase().includes("your contact information")
    );

    const possibleSender =
      senderCandidates[senderCandidates.length - 1] || "Not detected";

    let category = "General Document";

if (
  lowerText.includes("form 1040") ||
  lowerText.includes("irs") ||
  lowerText.includes("tax return") ||
  lowerText.includes("taxable income") ||
  lowerText.includes("refund") ||
  lowerText.includes("earned income credit")
) {
  category = "Tax Document";
} else if (
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

let documentMatch = "Good Match";
let analysisWarning = "No major document mismatch detected.";

if (
  category === "Debt & Collections" &&
  amountFound === "Not detected" &&
  referenceFound === "Not detected" &&
  possibleSender === "Not detected"
) {
  documentMatch = "Low Confidence Match";
  analysisWarning =
    "⚠ Analysis Warning: This document may not match the selected Debt & Collections category. The system could not find enough debt collection information such as a balance, account/reference number, creditor, or collection sender. Results may be incomplete or inaccurate. Please verify that the correct document was uploaded.";
}
    
let riskLevel = "Low";
let documentStatus = "Needs Review";

let suggestedActions = [
  "Review the document carefully"
];
if (category === "Tax Document") {
  documentMatch = "Wrong Document Type";
  analysisWarning =
    "⚠ Analysis Warning: This appears to be a tax document, not a debt collection notice. This document cannot be properly analyzed under Debt & Collections. Please upload a debt collection letter, billing notice, creditor notice, or collection agency letter for this category.";

  riskLevel = "Unknown";
  documentStatus = "Wrong document type selected";

  suggestedActions = [
    "Confirm you uploaded the correct document",
    "Use a tax-related category if available",
    "Upload a debt collection notice for Debt & Collections analysis"
  ];
}
if (category === "Debt & Collections") {
  riskLevel = "Medium";
  documentStatus = "Review balance and account details";

  suggestedActions = [
    "Verify the debt amount",
    "Request debt validation",
    "Contact the creditor",
    "Review payment options"
  ];
}

if (category === "Housing & Rent") {
  riskLevel = "High";
  documentStatus = "Review deadlines immediately";

  suggestedActions = [
    "Review the notice immediately",
    "Verify lease information",
    "Gather supporting documents",
    "Respond before any deadline"
  ];
}

if (category === "Government & Benefits") {
  riskLevel = "Medium";
  documentStatus = "Review requested documents and deadlines";

  suggestedActions = [
    "Review eligibility requirements",
    "Gather requested documents",
    "Submit documents before deadlines",
    "Monitor agency communications"
  ];
}

if (deadlineFound !== "Not detected") {
  riskLevel = "High";
  documentStatus = "Deadline or due date detected";
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

    let aiSummary =
      "AI summary was not available, so this document was processed with the rule-based summary.";

    try {
      const aiResponse = await openai.responses.create({
        model: "gpt-4o-mini",
        instructions:
          "You are helping summarize consumer documents for a public-service document assistant. Be clear, practical, and cautious. Do not give legal advice. Explain what the document appears to be, what it asks for, and what the user should review.",
        input: `
Document category: ${category}
Detected sender: ${possibleSender}
Detected amount: ${amountFound}
Detected date: ${dateFound}
Detected deadline or due date: ${deadlineFound}
Detected phone: ${phoneFound}
Detected email: ${emailFound}
Detected website: ${websiteFound}
Detected reference/account/case number: ${referenceFound}

OCR text:
${text}
        `,
      });

      aiSummary = aiResponse.output_text || aiSummary;
    } catch (aiError) {
      console.error("OpenAI summary failed:", aiError);
    }

    const summary = `
Category: ${category}

Document Match:
${documentMatch}

Analysis Warning:
${analysisWarning}

Sender:
${possibleSender}

Amount Found:
${amountFound}

Possible Date:
${dateFound}

Deadline / Due Date:
${deadlineFound}

Risk Level:
${riskLevel}

Status:
${documentStatus}

Suggested Actions:
• ${suggestedActions.join("\n• ")}

Phone Found:
${phoneFound}

Email Found:
${emailFound}

Website Found:
${websiteFound}

Reference Found:
${referenceFound}

AI Summary:
${aiSummary}

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
