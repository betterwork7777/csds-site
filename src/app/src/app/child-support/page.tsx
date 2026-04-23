export default function ChildSupportPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Child Support Assistance
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Select the option that best describes your situation.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button className="rounded-xl border border-gray-300 p-6 text-left shadow-sm transition hover:bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900">
              Request Child Support
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Start a new child support case.
            </p>
          </button>

          <button className="rounded-xl border border-gray-300 p-6 text-left shadow-sm transition hover:bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900">
              Modify Existing Child Support Order
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Change an existing child support order.
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}
