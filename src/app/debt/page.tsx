export default function DebtPage() {
  const documents = [
    "Collection notices",
    "Credit card debt letters",
    "Medical bills sent to collections",
    "Payment demand letters",
    "Debt lawsuit or court notices",
    "Settlement offer letters",
  ];

  const steps = [
    "Upload or describe the notice you received.",
    "We identify creditor name, amount claimed, deadlines, and warning language.",
    "You receive a plain-English summary and suggested document options.",
  ];

  return (
    <main className="min-h-screen bg-blue-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm font-semibold text-blue-600">
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Debt Help
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Debt & Collection Notice Help
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Get help understanding collection letters, credit card debt notices,
            medical bills, payment demand letters, and debt-related paperwork.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <p className="text-sm font-semibold text-gray-500">Focus</p>
              <p className="mt-2 text-2xl font-bold">Debt Notices</p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm font-semibold text-gray-500">
                Review Type
              </p>
              <p className="mt-2 text-2xl font-bold">
                Document Summary
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm font-semibold text-gray-500">Status</p>
              <p className="mt-2 text-2xl font-bold text-blue-600">
                Self-Help
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-bold">
                What this tool helps with
              </h2>

              <p className="mt-3 text-gray-600">
                This page helps organize important details such as creditor
                name, account number, amount claimed, response deadline,
                settlement language, lawsuit warning, and possible next steps.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h2 className="text-xl font-bold">Common documents</h2>

              <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
                {documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-bold">How it works</h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-bold text-blue-600">
                    Step {index + 1}
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm text-yellow-900">
            This page provides educational and self-help information only.
            It does not provide legal advice, financial advice, debt settlement
            services, or professional representation.
          </div>

          <a
            href="/documents"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Upload a Debt Notice
          </a>
        </section>
      </div>
    </main>
  );
}
