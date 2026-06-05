type ServiceColor =
  | "blue"
  | "emerald"
  | "orange"
  | "rose"
  | "purple"
  | "slate";

type ServicePageProps = {
  label: string;
  title: string;
  description: string;
  focus: string;
  reviewType: string;
  status?: string;
  documents: string[];
  steps: string[];
  disclaimer: string;
  uploadText: string;
  color?: ServiceColor;
};

const colorStyles = {
  blue: {
    pageBg: "bg-blue-50",
    accentText: "text-blue-700",
    button: "bg-blue-700 hover:bg-blue-800",
    ring: "ring-blue-100",
    soft: "bg-blue-50 border-blue-100",
  },
  emerald: {
    pageBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    button: "bg-emerald-700 hover:bg-emerald-800",
    ring: "ring-emerald-100",
    soft: "bg-emerald-50 border-emerald-100",
  },
  orange: {
    pageBg: "bg-orange-50",
    accentText: "text-orange-700",
    button: "bg-orange-700 hover:bg-orange-800",
    ring: "ring-orange-100",
    soft: "bg-orange-50 border-orange-100",
  },
  rose: {
    pageBg: "bg-rose-50",
    accentText: "text-rose-700",
    button: "bg-rose-700 hover:bg-rose-800",
    ring: "ring-rose-100",
    soft: "bg-rose-50 border-rose-100",
  },
  purple: {
    pageBg: "bg-purple-50",
    accentText: "text-purple-700",
    button: "bg-purple-700 hover:bg-purple-800",
    ring: "ring-purple-100",
    soft: "bg-purple-50 border-purple-100",
  },
  slate: {
    pageBg: "bg-slate-100",
    accentText: "text-slate-700",
    button: "bg-slate-800 hover:bg-slate-900",
    ring: "ring-slate-200",
    soft: "bg-slate-50 border-slate-200",
  },
};

export default function ServicePage({
  label,
  title,
  description,
  focus,
  reviewType,
  status = "Self-Help",
  documents,
  steps,
  disclaimer,
  uploadText,
  color = "blue",
}: ServicePageProps) {
  const style = colorStyles[color];

  return (
    <main className={`min-h-screen ${style.pageBg} px-6 py-16 text-gray-900`}>
      <div className="mx-auto max-w-6xl">
        <a href="/" className={`text-sm font-semibold ${style.accentText}`}>
          ← Back to Home
        </a>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
          <div className={`border-b p-8 md:p-10 ${style.soft}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ${style.ring} ${style.accentText}`}
              >
                {label}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-100">
                Document review
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-100">
                Deadline-ready
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                  {title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/documents"
                    className={`rounded-xl px-6 py-3 font-semibold text-white shadow-sm transition ${style.button}`}
                  >
                    {uploadText}
                  </a>

                  <a
                    href="/"
                    className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    Review Other Services
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <p className="text-sm font-bold text-gray-500">
                  Case preparation preview
                </p>

                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <span>Document status</span>
                    <span className={`font-bold ${style.accentText}`}>
                      Ready
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <span>Review type</span>
                    <span className="font-bold">{reviewType}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                    <span>Future alerts</span>
                    <span className="font-bold text-red-700">Planned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">Focus</p>
                <p className="mt-2 text-2xl font-bold">{focus}</p>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">
                  Review Type
                </p>
                <p className="mt-2 text-2xl font-bold">{reviewType}</p>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">Status</p>
                <p className={`mt-2 text-2xl font-bold ${style.accentText}`}>
                  {status}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">What this helps with</h2>

                <p className="mt-3 leading-7 text-gray-600">
                  This page helps organize important details, identify missing
                  information, highlight deadlines or warning language, and
                  prepare the next self-help document step.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-gray-800">
                    Good things to have ready
                  </p>

                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                    <li>Notice or letter date</li>
                    <li>Deadline or due date</li>
                    <li>Sender name, company, landlord, agency, or creditor</li>
                    <li>Amount claimed, if money is involved</li>
                    <li>Any response instructions listed on the document</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Common documents</h2>

                <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
                  {documents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className={`mt-5 rounded-xl border p-4 ${style.soft}`}>
                  <p className={`text-sm font-bold ${style.accentText}`}>
                    Upload guidance
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    Clear photos, PDFs, screenshots, and scanned notices are the
                    best documents to upload for review.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h2 className="text-xl font-bold">How it works</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                  >
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold shadow-sm ring-1 ${style.ring} ${style.accentText}`}
                    >
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
                  Deadline & alert preview
                </h2>

                <p className="mt-3 text-sm leading-6 text-red-800">
                  Future versions can keep important dates visible until the
                  user manually clears them. This is designed for deadlines,
                  notice dates, response dates, follow-ups, court dates, and
                  agency reminders.
                </p>

                <div className="mt-4 rounded-xl bg-white p-4 text-sm text-red-900 shadow-sm">
                  Example alert: “This notice may require action soon. Review
                  the deadline before closing this case.”
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Record protection</h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Future versions can save upload history, OCR results, response
                  drafts, timestamps, and communication records so users have a
                  clearer timeline if a dispute happens later.
                </p>

                <div className="mt-4 grid gap-3 text-sm text-gray-700">
                  <div className="rounded-xl bg-slate-50 p-3">
                    Upload record
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    Response history
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    Deadline log
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Future smart workflow</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                <div className="rounded-xl border bg-slate-50 p-4">
                  <p className="font-semibold">OCR Review</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Scan uploaded documents for readable text.
                  </p>
                </div>

                <div className="rounded-xl border bg-slate-50 p-4">
                  <p className="font-semibold">AI Summary</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Summarize names, dates, amounts, and warnings.
                  </p>
                </div>

                <div className="rounded-xl border bg-slate-50 p-4">
                  <p className="font-semibold">Persistent Alerts</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Keep urgent reminders visible until cleared.
                  </p>
                </div>

                <div className="rounded-xl border bg-slate-50 p-4">
                  <p className="font-semibold">Quick Response</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Prepare simple response drafts for user approval.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
                {disclaimer}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-gray-700">
                <strong>Privacy note:</strong> Users should avoid uploading
                unnecessary personal information unless it is needed to
                understand the document. Future versions should include secure
                login, saved cases, and access controls before public launch.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
