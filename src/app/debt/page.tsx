export default function DebtPage() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">
        <a href="/" className="text-sm font-semibold text-blue-600">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">
          Debt & Collection Notice Help
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Get help understanding collection letters, credit card debt notices,
          medical bills, payment demand letters, and debt-related paperwork.
        </p>

        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold">What this tool helps with</h2>
            <p className="mt-2 text-gray-600">
              We help identify important details such as creditor name, amount
              claimed, deadlines, account information, warning language, and
              possible next steps.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <h2 className="text-xl font-bold">Common documents</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-600">
              <li>Collection notices</li>
              <li>Credit card debt letters</li>
              <li>Medical bills</li>
              <li>Payment demand letters</li>
              <li>Debt lawsuit or court notices</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm text-yellow-900">
            This page provides educational and self-help information only. It
            does not provide legal advice, financial advice, debt settlement
            services, or professional representation.
          </div>
        </div>

        <a
          href="/#upload"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Upload a Notice
        </a>
      </div>
    </main>
  );
}
