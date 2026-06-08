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
    soft: "bg-blue-50 border-blue-100",
  },
  emerald: {
    pageBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    button: "bg-emerald-700 hover:bg-emerald-800",
    soft: "bg-emerald-50 border-emerald-100",
  },
  orange: {
    pageBg: "bg-orange-50",
    accentText: "text-orange-700",
    button: "bg-orange-700 hover:bg-orange-800",
    soft: "bg-orange-50 border-orange-100",
  },
  rose: {
    pageBg: "bg-rose-50",
    accentText: "text-rose-700",
    button: "bg-rose-700 hover:bg-rose-800",
    soft: "bg-rose-50 border-rose-100",
  },
  purple: {
    pageBg: "bg-purple-50",
    accentText: "text-purple-700",
    button: "bg-purple-700 hover:bg-purple-800",
    soft: "bg-purple-50 border-purple-100",
  },
  slate: {
    pageBg: "bg-slate-100",
    accentText: "text-slate-700",
    button: "bg-slate-800 hover:bg-slate-900",
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
    <main className={`min-h-screen ${style.pageBg} px-6 py-14 text-gray-900`}>
      <div className="mx-auto max-w-3xl">
        <a href="/" className={`text-sm font-bold ${style.accentText}`}>
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-xl">
          <div className="text-center">
            <p
              className={`mx-auto inline-block rounded-full px-4 py-2 text-sm font-bold ${style.soft} ${style.accentText}`}
            >
              {label}
            </p>

            <h1 className="mt-5 text-4xl font-bold">{title}</h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
              {description}
            </p>

            <a
              href="/documents"
              className={`mt-7 inline-block rounded-xl px-7 py-4 text-lg font-bold text-white ${style.button}`}
            >
              {uploadText}
            </a>
          </div>

          <div className="mt-10 space-y-5">
            <div className="rounded-2xl border bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    What this is for
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{focus}</h2>
                  <p className="mt-2 text-gray-600">{reviewType}</p>
                </div>

                <details className="relative">
                  <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full bg-white text-sm font-bold shadow">
                    ?
                  </summary>
                  <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border bg-white p-4 text-sm leading-6 text-gray-700 shadow-xl">
                    Use this page when you received an important notice, letter,
                    bill, or paperwork and need help understanding what matters.
                  </div>
                </details>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold">Step 1: Pick your notice</h2>

                <details className="relative">
                  <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full bg-slate-100 text-sm font-bold">
                    ?
                  </summary>
                  <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border bg-white p-4 text-sm leading-6 text-gray-700 shadow-xl">
                    Choose the category that best matches the paper you received.
                    It does not have to be perfect.
                  </div>
                </details>
              </div>

              <ul className="mt-4 space-y-2">
                {documents.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold">Step 2: Upload it</h2>

                <details className="relative">
                  <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full bg-slate-100 text-sm font-bold">
                    ?
                  </summary>
                  <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border bg-white p-4 text-sm leading-6 text-gray-700 shadow-xl">
                    Clear photos, screenshots, PDFs, and scanned documents work
                    best.
                  </div>
                </details>
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                Upload the notice or document. The system will store it and prepare
                it for review.
              </p>

              <a
                href="/documents"
                className={`mt-5 inline-block rounded-xl px-6 py-3 font-bold text-white ${style.button}`}
              >
                Upload Document
              </a>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold">Step 3: See what matters</h2>

                <details className="relative">
                  <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full bg-slate-100 text-sm font-bold">
                    ?
                  </summary>
                  <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border bg-white p-4 text-sm leading-6 text-gray-700 shadow-xl">
                    Future OCR and AI review will look for names, dates,
                    deadlines, amounts, and warning language.
                  </div>
                </details>
              </div>

              <div className="mt-4 space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-gray-700"
                  >
                    <strong>{index + 1}.</strong> {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-red-900">
                  Step 4: Do not miss deadlines
                </h2>

                <details className="relative">
                  <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full bg-white text-sm font-bold text-red-800 shadow">
                    ?
                  </summary>
                  <div className="absolute right-0 z-10 mt-3 w-64 rounded-2xl border bg-white p-4 text-sm leading-6 text-gray-700 shadow-xl">
                    Future alerts can stay visible until the user clears them.
                  </div>
                </details>
              </div>

              <p className="mt-3 text-sm leading-6 text-red-800">
                Future versions will help track important dates, response
                deadlines, follow-ups, and reminders.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-5">
              <h2 className="text-xl font-bold">What to expect</h2>

              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="rounded-xl bg-white p-3">
                  Upload record saved
                </div>
                <div className="rounded-xl bg-white p-3">
                  OCR review coming next
                </div>
                <div className="rounded-xl bg-white p-3">
                  Summary and alerts planned
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              {disclaimer}
            </div>

            <div className="rounded-2xl border bg-white p-5 text-sm leading-6 text-gray-600">
              <strong>Status:</strong> {status}. This platform provides
              educational self-help information only.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
