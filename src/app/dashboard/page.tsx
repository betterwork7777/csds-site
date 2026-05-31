export default function DashboardPage() {
  const cases = [
    {
      title: "Collection Notice Review",
      category: "Debt & Collections",
      status: "Uploaded",
      urgency: "Moderate",
      nextStep: "Review creditor name, amount claimed, and response deadline.",
    },
    {
      title: "Rent Notice Help",
      category: "Housing",
      status: "Needs Review",
      urgency: "High",
      nextStep: "Check notice date, deadline, landlord name, and amount owed.",
    },
    {
      title: "Medical Bill Question",
      category: "Medical Billing",
      status: "Drafting",
      urgency: "Moderate",
      nextStep: "Request itemized bill and compare with insurance records.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <a href="/" className="text-sm font-semibold text-blue-600">
              ← Back to Home
            </a>
            <h1 className="mt-4 text-4xl font-bold">Client Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Track uploaded documents, review status, urgency level, and suggested next steps.
            </p>
          </div>

          <a
            href="/#upload"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Upload New Document
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">Open Cases</p>
            <p className="mt-2 text-4xl font-bold">3</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">High Urgency</p>
            <p className="mt-2 text-4xl font-bold text-red-600">1</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500">AI Reviews</p>
            <p className="mt-2 text-4xl font-bold text-blue-600">2</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Recent Document Cases</h2>

          <div className="mt-5 space-y-4">
            {cases.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.category}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      {item.status}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        item.urgency === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.urgency}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  <strong>Suggested next step:</strong> {item.nextStep}
                </p>

                <button className="mt-4 rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-gray-50">
                  View Case
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5 text-sm text-yellow-900">
          This dashboard is a preview screen. Login, saved case history, admin review,
          and real OCR/AI processing will be connected in later phases.
        </div>
      </div>
    </main>
  );
}
