"use client";

import { useState } from "react";
import { supabase } from "./lib/supabase";

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Form submitted (temporary)");
};

export default function Home() {
  const [noticeType, setNoticeType] = useState("Debt & Collections");
  const [concern, setConcern] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const services = [
    {
      icon: "🏠",
      title: "Housing & Rent",
      hint: "Rent notices, eviction notices, landlord letters, repair issues.",
      href: "/housing",
    },
    {
      icon: "💳",
      title: "Debt & Collections",
      hint: "Collection letters, credit card debt, payment demands, medical debt.",
      href: "/debt",
    },
    {
      icon: "🏛️",
      title: "Government & Benefits",
      hint: "DSHS, SNAP, ABD, Medicaid, review letters, missing documents.",
      href: "/benefits",
    },
  ];

  const getPreview = () => {
    if (noticeType === "Housing & Rent") {
      return {
        urgency: "High",
        summary: "This may involve rent, housing, or landlord paperwork.",
        nextSteps:
          "Check the notice date, deadline, landlord name, amount owed, and response instructions.",
      };
    }

    if (noticeType === "Government & Benefits") {
      return {
        urgency: "Moderate",
        summary: "This may involve benefits, eligibility, or agency paperwork.",
        nextSteps:
          "Check the agency name, deadline, requested documents, and benefit type.",
      };
    }

    return {
      urgency: "Moderate",
      summary: "This may involve debt, collections, or a payment demand.",
      nextSteps:
        "Check the sender, amount claimed, deadline, account number, and warning language.",
    };
  };

  const preview = getPreview();

  async function handleUpload() {
    setIsAnalyzing(true);
    setShowResult(false);
    setUploadStatus("");

    if (!file) {
      setUploadStatus("No file selected. Showing preview only.");
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResult(true);
      }, 1200);
      return;
    }

    const filePath = `uploads/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("debt-documents")
      .upload(filePath, file);

    if (error) {
      setIsAnalyzing(false);
      setUploadStatus("Upload failed. Please try again.");
      return;
    }

    await supabase.from("document_uploads").insert({
      document_type: noticeType,
      concern,
      file_name: file.name,
      file_path: filePath,
      status: "uploaded",
    });

    setUploadStatus("Document uploaded successfully.");

    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <nav className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-bold">
            Common Sense
          </a>

          <div className="flex gap-5 text-sm font-semibold">
            <a href="#choose" className="hover:text-blue-700">
              Choose
            </a>
            <a href="#upload" className="hover:text-blue-700">
              Upload
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto mb-5 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
            Personal paperwork assistant
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Got a Notice?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-2xl font-semibold text-slate-200">
            Upload it. Understand it. Take action.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#upload"
              className="rounded-xl bg-blue-600 px-7 py-4 text-lg font-bold text-white hover:bg-blue-700"
            >
              Upload Notice
            </a>

            <a
              href="#choose"
              className="rounded-xl border border-white/30 px-7 py-4 text-lg font-bold text-white hover:bg-white/10"
            >
              Choose Category
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm text-slate-400">
            Housing notices • Collection letters • Benefits paperwork
          </p>
        </div>
      </section>

      <section id="choose" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">What did you get?</h2>
          <p className="mt-3 text-gray-600">
            Choose one. Upload the notice. We help find what matters.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">{service.icon}</div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold">{service.title}</h3>

                <details className="relative">
                  <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                    ?
                  </summary>

                  <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border bg-white p-4 text-sm leading-6 text-gray-700 shadow-xl">
                    {service.hint}
                  </div>
                </details>
              </div>

              <p className="mt-4 text-sm font-semibold text-blue-700">
                Start here →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="upload" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-slate-50 p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Upload a Notice</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              We look for dates, deadlines, names, amounts, and next steps.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold">
                Choose category
              </label>

              <select
                value={noticeType}
                onChange={(e) => setNoticeType(e.target.value)}
                className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-blue-500"
              >
                <option>Housing & Rent</option>
                <option>Debt & Collections</option>
                <option>Government & Benefits</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Upload file
              </label>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const selected = e.target.files?.[0] || null;
                  setFile(selected);
                  setFileName(selected ? selected.name : "");
                }}
                className="w-full rounded-xl border bg-white px-4 py-3"
              />

              <p className="mt-2 text-sm text-gray-500">
                PDF, JPG, or PNG.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                What worries you?
              </label>

              <textarea
                rows={3}
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                placeholder="Example: I got this notice and I don't know if I need to respond."
                className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="button"
              onClick={handleUpload}
              disabled={isAnalyzing}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white hover:bg-blue-700 disabled:bg-blue-400"
            >
              {isAnalyzing ? "Checking Notice..." : "Check My Notice"}
            </button>

            {uploadStatus && (
              <p className="text-sm font-bold text-blue-700">
                {uploadStatus}
              </p>
            )}
          </form>

          {isAnalyzing && (
            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
              <p className="text-lg font-bold text-blue-900">
                Checking your notice...
              </p>
              <p className="mt-2 text-gray-600">
                Looking for important information.
              </p>
            </div>
          )}

          {showResult && (
            <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-6">
              <h3 className="text-2xl font-bold text-blue-900">
                Quick Preview
              </h3>

              <div className="mt-4 space-y-3 text-gray-700">
                <p>
                  <strong>Category:</strong> {noticeType}
                </p>

                <p>
                  <strong>File:</strong> {fileName || "No file selected"}
                </p>

                <p>
                  <strong>Concern:</strong>{" "}
                  {concern || "No concern entered"}
                </p>

                <p>
                  <strong>Urgency:</strong>{" "}
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-800">
                    {preview.urgency}
                  </span>
                </p>

                <p>
                  <strong>Summary:</strong> {preview.summary}
                </p>

                <p>
                  <strong>Next:</strong> {preview.nextSteps}
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
                Preview only. OCR, deadline detection, and alert reminders are
                being connected next.
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
            Educational self-help only. Not legal advice or professional
            representation.
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold">Need help?</h2>

          <p className="mt-3 text-gray-600">
            Call, text, or send a short message.
          </p>

          <div className="mt-6 space-y-3 text-lg">
            <p>
              <strong>Call or text:</strong>{" "}
              <a href="tel:4255848159" className="font-bold text-blue-700">
                425-584-8159
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:commonsensedocs@gmail.com"
                className="font-bold text-blue-700"
              >
                commonsensedocs@gmail.com
              </a>
            </p>
          </div>

          <form onSubmit={sendEmail} className="mt-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <select
              name="service"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            >
              <option>Housing & Rent</option>
              <option>Debt & Collections</option>
              <option>Government & Benefits</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Briefly describe what you need help with"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
