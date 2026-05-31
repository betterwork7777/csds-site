export default function HousingPage() {
  const documents = [
    "Rent notices",
    "Eviction notices",
    "Late payment letters",
    "Lease violation notices",
    "Security deposit disputes",
    "Repair or habitability complaints",
  ];

  const steps = [
    "Upload or describe the housing notice or landlord issue.",
    "We identify dates, deadlines, rent amount, landlord claims, and missing details.",
    "You receive a plain-English summary and possible self-help document options.",
  ];

  return (
    <main className="min-h-screen bg-emerald-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm font-semibold text-emerald-700">
          ← Back to Home
        </a>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Housing Help
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Rent, Landlord & Housing Notice Help
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Get help organizing rent notices, eviction-related papers, landlord
            letters, repair requests, lease issues, and housing documents.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <p className="text-sm font-semibold text-gray-500">Focus</p>
              <p className="mt-2 text-2xl font-bold">Housing Notices</p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm font-semibold text-gray-500">
                Review Type
              </p>
              <p className="mt-2 text-2xl font-bold">
                Notice Summary
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm font-semibold text-gray-500">Status</p>
              <p className="mt-2 text-2xl font-bold text-emerald-700">
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
                This page helps organize important housing details such as
                notice date, response deadline, rent amount, landlord name,
                lease issue, repair problem, payment demand, and possible next
                steps.
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
                  <p className="text-sm font-bold text-emerald-700">
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
            It does not provide legal advice, eviction defense representation,
            landlord-tenant legal advice, or professional representation.
          </div>

          <a
            href="/documents"
            className="mt-8 inline-block rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Upload a Housing Notice
          </a>
        </section>
      </div>
    </main>
  );
}
