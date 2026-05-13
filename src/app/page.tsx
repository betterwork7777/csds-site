'use client';

import React, { useState } from 'react';


const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Form submitted (temporary)");
};
export default function Home() {
	const [debtDocType, setDebtDocType] = useState("Collection Notice");
const [debtConcern, setDebtConcern] = useState("");
const [debtFileName, setDebtFileName] = useState("");
const [showDebtResult, setShowDebtResult] = useState(false);
const [isAnalyzingDebt, setIsAnalyzingDebt] = useState(false);

const getDebtAnalysis = () => {
  if (debtDocType === "Medical Bill") {
    return {
      summary: "This appears to involve a medical bill or healthcare-related balance.",
      urgency: "Review the billing date, insurance status, payment deadline, and whether the bill has already gone to collections.",
      nextSteps: "Possible next steps may include requesting an itemized bill, checking insurance explanation of benefits, asking about financial assistance, or disputing billing errors.",
		urgencyLevel: "Moderate",
confidence: "82%",
    };
  }

  if (debtDocType === "Debt Lawsuit / Court Notice") {
    return {
      summary: "This may involve a court-related debt notice or lawsuit document.",
      urgency: "Court deadlines can be very important. Look carefully for response dates, hearing dates, court name, case number, and plaintiff information.",
      nextSteps: "Possible next steps may include organizing the document, confirming deadlines, reviewing whether a response is required, and seeking licensed help if court action is involved.",
		urgencyLevel: "High",
confidence: "88%",
    };
  }

  if (debtDocType === "Credit Card Debt") {
    return {
      summary: "This appears to involve credit card debt or a creditor balance.",
      urgency: "Important details may include the creditor name, account number, claimed amount, payment deadline, and whether the account has been transferred to collections.",
      nextSteps: "Possible next steps may include requesting debt validation, checking account records, reviewing credit reports, or organizing payment/dispute options.",
		urgencyLevel: "Moderate",
confidence: "84%",
    };
  }

  if (debtDocType === "Payment Demand Letter") {
    return {
      summary: "This appears to be a demand for payment.",
      urgency: "Pay attention to the amount requested, deadline, sender, reason for payment, and any language threatening further action.",
      nextSteps: "Possible next steps may include verifying the claim, collecting records, requesting clarification, or preparing a written response.",
		urgencyLevel: "Moderate",
confidence: "80%",
    };
  }

  return {
    summary: "This appears to be a debt or collection-related document.",
    urgency: "Important details may include the sender, amount claimed, response deadline, account information, and any warning language.",
    nextSteps: "Possible next steps may include requesting validation, organizing records, reviewing deadlines, and preparing a self-help response.",
	  urgencyLevel: "Moderate",
confidence: "78%",
  };
};

const debtAnalysis = getDebtAnalysis();
	const getUrgencyBadgeClass = () => {
  if (debtAnalysis.urgencyLevel === "High") {
    return "bg-red-100 text-red-800 border-red-200";
  }

  if (debtAnalysis.urgencyLevel === "Moderate") {
    return "bg-yellow-100 text-yellow-800 border-yellow-200";
  }

  return "bg-green-100 text-green-800 border-green-200";
};

  const services = [
  {
    title: "Housing & Rent Issues",
    desc: "Understand notices, organize disputes, and navigate landlord-related paperwork.",
  },
  {
    title: "Debt & Collections",
    desc: "Upload collection notices and receive guided next-step assistance.",
  },
  {
    title: "Consumer Complaints",
    desc: "Organize disputes involving refunds, scams, billing, or service problems.",
  },
  {
    title: "Healthcare Billing",
    desc: "Get help understanding medical bills, insurance notices, and payment options.",
  },
  {
    title: "Government & Benefits",
    desc: "Navigate applications, notices, and public-service paperwork more clearly.",
  },
  {
    title: "Document Guidance",
    desc: "AI-assisted explanations and workflow support for everyday administrative documents.",
  },
];

  return (
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <nav className="w-full border-b bg-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">Common Sense</div>

          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-gray-900 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Common Sense Public and Consumer Services
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              AI-Assisted Help for Housing, Debt, Consumer Problems, and Everyday Paperwork.
              <br />
              We understand how overwhelming this process can be, we've been there.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              We help everyday people understand notices, organize paperwork, respond to consumer problems, and navigate complicated systems with clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#upload"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Upload a Notice
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Why People Need This
            </p>

            <h2 className="text-2xl font-bold leading-snug">
              When the process feels complicated, we help you move forward.
            </h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Plain-English explanations for confusing notices
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Guided workflows for housing, debt, billing, and consumer issues
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Built for everyday people facing complicated systems
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            AI-assisted support to help people understand notices, organize paperwork, and navigate everyday consumer problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700">
                {index + 1}
              </div>

              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">{service.desc}</p>

              <a
                href="#upload"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Upload & Begin →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <h2 className="text-3xl font-bold">What We’re Building</h2>
          <p className="mt-4 text-gray-600">
            More than just document help — a growing platform designed to give
            everyday people real leverage.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Phase 1</h3>
            <p className="text-gray-600">
              AI-assisted document understanding and organizational workflows.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Phase 2</h3>
            <p className="text-gray-600">
              Upload notices, identify deadlines, and generate guided next-step responses.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Phase 3</h3>
            <p className="text-gray-600">
              Consumer problem-resolution tools for housing, debt, billing, and disputes.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Future</h3>
            <p className="text-gray-600">
             A unified AI-powered platform designed to help ordinary people navigate overwhelming systems with clarity and confidence.
            </p>
          </div>
        </div>
      </section>
		  <section id="upload" className="bg-blue-50 px-6 py-20">
  <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg md:p-10">
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold">Upload a Debt or Collection Notice</h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Upload a collection letter, creditor notice, medical bill, or debt-related document.
        We’ll help you understand what it is, what details matter, and what possible next steps may apply.
      </p>
    </div>

    <form className="space-y-5">
  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      What type of document is this?
    </label>
    <select
      value={debtDocType}
      onChange={(e) => setDebtDocType(e.target.value)}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
    >
      <option>Collection Notice</option>
      <option>Credit Card Debt</option>
      <option>Medical Bill</option>
      <option>Debt Lawsuit / Court Notice</option>
      <option>Payment Demand Letter</option>
      <option>Other Debt-Related Document</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Upload Document
    </label>
    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) => {
        const file = e.target.files?.[0];
        setDebtFileName(file ? file.name : "");
      }}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
    />
    <p className="mt-2 text-sm text-gray-500">
      Accepted formats: PDF, JPG, PNG.
    </p>
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Briefly describe what you’re worried about
    </label>
    <textarea
      rows={4}
      value={debtConcern}
      onChange={(e) => setDebtConcern(e.target.value)}
      placeholder="Example: I received this collection letter and I don’t know if I need to respond."
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
    ></textarea>
  </div>

  <button
  type="button"
  onClick={() => {
    setIsAnalyzingDebt(true);
    setShowDebtResult(false);

    setTimeout(() => {
      setIsAnalyzingDebt(false);
      setShowDebtResult(true);
    }, 2000);
  }}
  className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-blue-400"
  disabled={isAnalyzingDebt}
>
  {isAnalyzingDebt ? "Analyzing Document..." : "Analyze My Notice"}
</button>
</form>

{isAnalyzingDebt && (
  <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
    <p className="text-lg font-semibold text-blue-900">
      Analyzing your document...
    </p>
    <p className="mt-2 text-gray-600">
      Reviewing document type, key concerns, possible deadlines, and response options.
    </p>
  </div>
)}

{showDebtResult && (
  <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
    <h3 className="mb-3 text-xl font-bold text-blue-900">
      Preliminary Document Review
    </h3>

    <div className="space-y-3 text-gray-700">
      <p>
        <strong>Document Type:</strong> {debtDocType}
      </p>

      <p>
        <strong>Uploaded File:</strong>{" "}
        {debtFileName || "No file selected yet"}
      </p>

      <p>
        <strong>Your Concern:</strong>{" "}
        {debtConcern || "No concern entered yet"}
      </p>

      <p>
  <strong>Status:</strong> Ready for AI-assisted review.
</p>
	
	<div>
  <strong>Urgency Level:</strong>{" "}
  <span
    className={`inline-block rounded-full border px-3 py-1 text-sm font-semibold ${getUrgencyBadgeClass()}`}
  >
    {debtAnalysis.urgencyLevel}
  </span>
</div>	

<p>
  <strong>AI Confidence:</strong> {debtAnalysis.confidence}
</p>	

<p>
  <strong>Preliminary Summary:</strong> {debtAnalysis.summary}
</p>

<p>
  <strong>Urgency Check:</strong> {debtAnalysis.urgency}
</p>

<p>
  <strong>Suggested Next Steps:</strong> {debtAnalysis.nextSteps}
</p>

<p>
  <strong>Possible focus areas:</strong> deadlines, creditor information,
  amount claimed, response options, and important warning language.
</p>
    </div>

    <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
      This is a temporary preview result. Full AI document analysis, OCR reading,
      deadline extraction, and response guidance will be connected in the next phase.
    </div>
  </div>
)}

    <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm text-yellow-900">
      <strong>Important:</strong> This tool provides educational and self-help information only.
      It does not provide legal advice, financial advice, debt settlement services, or professional representation.
    </div>
  </div>
</section>

      <section id="contact" className="bg-gray-100 px-6 py-20">
  <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg md:p-10">
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-3xl font-bold">Upload a Notice</h2>
        <p className="mb-6 text-gray-600">
          Stop Guessing. Get It Done Right.

	Tell us what kind of notice, bill, dispute, or paperwork you’re dealing with — we’ll help you understand it and guide you toward possible next steps.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <strong>Call or text:</strong>{" "}
            <a
              href="tel:4255848159"
              className="font-semibold text-blue-600"
            >
              425-584-8159
            </a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:commonsensedocs@gmail.com"
              className="font-semibold text-blue-600"
            >
              commonsensedocs@gmail.com
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
  type="text"
  name="name"
  placeholder="Your name"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
  type="email"
  name="email"
  placeholder="you@example.com"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Service Needed
          </label>
          <select
  name="service"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
>
            <option>Housing & Rent Issues</option>
<option>Debt & Collections</option>
<option>Consumer Complaints</option>
<option>Healthcare Billing</option>
<option>Government & Benefits</option>
<option>Document Guidance</option>
<option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
  name="message"
  rows={5}
  placeholder="Briefly describe what you need help with"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
></textarea>
        </div>

        <button
  type="submit"
  className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
>
  Submit Request
</button>
      </form>
    </div>
  </div>
</section>
    </main>
  );
}
