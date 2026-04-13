export default function Home() {
  const services = [
    {
      title: "Citizenship Application",
      desc: "Accurate preparation for your naturalization filing.",
    },
    {
      title: "Divorce Papers",
      desc: "Simple, affordable help with uncontested divorce paperwork.",
    },
    {
      title: "Small Claims",
      desc: "Document support for filing and organizing your case.",
    },
    {
      title: "Family-Based Green Card",
      desc: "Support for adjustment of status and family petitions.",
    },
    {
      title: "Child Support",
      desc: "Help preparing documents for support-related matters.",
    },
    {
      title: "Court Forms",
      desc: "Affordable help with court documents and filings."
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <nav className="w-full border-b bg-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">CSDS</div>

          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-gray-900 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Common Sense Document Services
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Clear, Simple Help with Docunents, Forms, Filing.
              <br />
              We understand how overwelming this process can be, we've been there.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              We help everyday people handle forms, filings, Documents
              clearly, affordably, and without confusion.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get Help Now
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
              Why People Need This
            </p>

            <h2 className="text-2xl font-bold leading-snug">
              When the process feels complicated, we help you move forward.
            </h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Clear support for forms and filings
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Straightforward help without the runaround
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Built for everyday people, not big institutions or expensive
                lawyers
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Reliable document preparation support for individuals and families.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700">
                {index + 1}
              </div>

              <h3 className="mb-2 text-xl font-bold group-hover:text-blue-600">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">{service.desc}</p>

              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Start Here →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <h2 className="text-3xl font-bold">What We’re Building</h2>
          <p className="mt-4 text-gray-600">
            More than just document help — a growing platform designed to give
            everyday people real leverage.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Phase 1</h3>
            <p className="text-gray-600">
              Document preparation for immigration, divorce, and court forms.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Phase 2</h3>
            <p className="text-gray-600">
              Government filings including L&amp;I claims, DHS requests, and
              official submissions.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Phase 3</h3>
            <p className="text-gray-600">
              Consumer complaint tools to help individuals take action against
              corporations.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold">Future</h3>
            <p className="text-gray-600">
              AI-powered tools that help generate, organize, and track cases
              more efficiently.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>

          <p className="mb-6 text-gray-600">
            Ready to get started? Reach out and we’ll help you move forward.
          </p>

          <div className="space-y-3 text-lg">
            <p>
              <strong>Call or text:</strong>{" "}
              <a
                href="tel:4255848159"
                className="font-semibold text-blue-600"
              >
                425-584-8159
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:commonsensedocs@gmail.com"
                className="font-semibold text-blue-600"
              >
                commonsensedocs@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:4255848159"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Call Now
            </a>

            <a
              href="mailto:commonsensedocs@gmail.com"
              className="rounded-lg border border-gray-400 px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
