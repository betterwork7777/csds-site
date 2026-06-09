"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function DocumentsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [ocrText, setOcrText] = useState("");

  async function handleUpload() {
    if (!file) {
      setMessage("Please choose a file first.");
      return;
    }

    setUploading(true);
    setMessage("");
    setOcrText("");

    const filePath = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("debt-documents")
      .upload(filePath, file);

    if (error) {
      setMessage(`Upload failed: ${error.message}`);
      setUploading(false);
      return;
    }

    setMessage("Upload successful. Running OCR...");

await new Promise((resolve) => setTimeout(resolve, 1000));

const fileBase64 = await new Promise<string>((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = () => resolve(reader.result as string);
  reader.onerror = reject;

  reader.readAsDataURL(file);
});

const response = await fetch("/api/ocr", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ fileBase64 }),
});

    const data = await response.json();

    if (!response.ok || !data.success) {
      setMessage(data.error || data.message || "OCR failed.");
      setUploading(false);
      return;
    }

    setOcrText(data.extractedText || "No text found.");
    setMessage("OCR complete.");
    setFile(null);
    setUploading(false);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm font-semibold text-slate-700">
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-xl">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
            Document Center
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Upload and organize important documents
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Upload notices, bills, letters, screenshots, or PDFs. This is the
            first step before OCR, AI summaries, deadline alerts, and saved case
            history.
          </p>

          <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8">
            <h2 className="text-xl font-bold">Upload a document</h2>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="mt-5 block w-full rounded-xl border bg-white p-3"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />

            {file && (
              <p className="mt-3 text-sm text-gray-600">
                Selected file: <strong>{file.name}</strong>
              </p>
            )}

            <button
              type="button"
              onClick={handleUpload}
              disabled={uploading}
              className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
            >
              {uploading ? "Working..." : "Upload & Read Document"}
            </button>

            {message && (
              <div className="mt-5 rounded-xl bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                {message}
              </div>
            )}
          </div>

          {ocrText && (
            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Extracted Text</h2>

              <pre className="mt-4 max-h-96 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-6 text-gray-700">
                {ocrText}
              </pre>
            </div>
          )}

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">Step 1</h3>
              <p className="mt-2 text-sm text-gray-600">
                Upload document to Supabase Storage.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">Step 2</h3>
              <p className="mt-2 text-sm text-gray-600">
                OCR reads document text.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">Step 3</h3>
              <p className="mt-2 text-sm text-gray-600">
                AI summary and deadline alerts will follow later.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            Do not upload sensitive real customer documents until Supabase Auth
            and Row Level Security are fully connected.
          </div>
        </section>
      </div>
    </main>
  );
}
