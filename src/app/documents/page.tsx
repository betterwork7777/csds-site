export default function DocumentsPage() {
  const documentTypes = [
    "Debt or collection notice",
    "Housing or rent notice",
    "Medical bill",
    "Benefits notice",
    "Consumer complaint document",
    "Other important paperwork",
  ];

  const nextSteps = [
    "Upload or describe the document.",
    "OCR will read the text in a later phase.",
    "AI summary will identify names, dates, amounts, and deadlines.",
    "Future alerts can remind users before important dates.",
  ];

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-semibold text-slate-700">
          ← Back to Home
        </a>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="border-b bg-slate-50 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                Document Center
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-slate-200">
                Upload hub
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-slate-200">
                OCR-ready
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                  Upload and organize important documents
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                  Use this page to collect notices, bills, letters, screenshots,
                  PDFs, and paperwork before review. This will become the center
                  for OCR, AI summaries, deadline alerts, and saved case records.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#upload-section"
                    className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-slate-800"
                  >
                    Go to Upload Area
                  </a>

                  <a
                    href="/dashboard"
                    className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    View Dashboard Preview
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <p className="text-sm font-bold text-gray-500">
                  Future workflow
                </p>

                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <span>Upload</span>
                    <span className="font-bold text-slate-700">Ready</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <span>OCR scan</span>
                    <span className="font-bold text-orange-700">Next</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <span>Alerts</span>
                    <span className="font-bold text-red-700">Planned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">
                  Page Purpose
                </p>
                <p className="mt-2 text-2xl font-bold">Document Intake</p>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">
                  Review Status
                </p>
                <p className="mt-2 text-2xl font-bold">Manual Preview</p>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">
                  Next Feature
                </p>
                <p className="mt-2 text-2xl font-bold text-orange-700">
                  OCR Scan
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div
                id="upload-section"
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold">Upload area preview</h2>

                <div className="mt-5 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <p className="text-lg font-bold text-slate-800">
                    Upload feature placeholder
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    In the next functional phase, this area will connect to
                    Supabase Storage and Google Vision OCR so uploaded files can
                    be saved and scanned.
                  </p>

                  <button
                    type="button"
                    className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white opacity-70"
                    disabled
                  >
                    Upload Coming Soon
                  </button>
                </div>

                <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  Do not upload sensitive personal documents until secure login,
                  storage rules, and access controls are fully connected.
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Document types</h2>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                  {documentTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-gray-800">
                    Best files to prepare
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Clear PDFs, screenshots, phone photos, scanned notices, and
                    official letters work best for future OCR review.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h2 className="text-xl font-bold">Planned document workflow</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                {nextSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                <h2 className="text-xl font-bold text-red-900">
                  Future deadline alerts
                </h2>

                <p className="mt-3 text-sm leading-6 text-red-800">
                  After OCR and AI summary are connected, this page can help
                  detect important dates and create alerts that stay visible
                  until the user clears them.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Future record history</h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Future versions can save upload records, extracted text,
                  summaries, response drafts, timestamps, and document history
                  for each case.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-gray-700">
              This page is currently a document intake preview. Secure login,
              Supabase storage permissions, OCR processing, and saved case
              history should be completed before accepting real user documents.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
