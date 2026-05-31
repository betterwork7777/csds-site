export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">
        <a href="/" className="text-sm font-semibold text-blue-600">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">
          Government Benefits & Assistance Help
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Get help understanding public-benefit notices, applications,
          eligibility letters, recertification paperwork, and agency requests.
        </p>

        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold">
              What this tool helps with
            </h2>

            <p className="mt-2 text-gray-600">
              We help organize paperwork, identify deadlines,
              summarize notices, and explain possible next steps for benefit-related issues.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold">
              Common benefit issues
            </h2>

            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-600">
              <li>ABD and disability notices</li>
              <li>SNAP / food assistance paperwork</li>
              <li>Housing assistance notices</li>
              <li>Benefit overpayment letters</li>
              <li>Recertification requests</li>
              <li>Verification document requests</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm text-yellow-900">
            This page provides educational and self-help information only.
            It does not provide legal advice or government representation.
          </div>
        </div>

        <a
          href="/#upload"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Upload a Benefits Notice
        </a>
      </div>
    </main>
  );
}
