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
      desc: "Affordable help with everyday legal paperwork.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
	<nav className="w-full bg-white border-b sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <div className="font-bold text-lg">
      CSDS
    </div>

    <div className="space-x-6">
      <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
    </div>

  </div>
</nav>
	<nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <div className="text-lg font-bold">Common Sense Document Services</div>

    <div className="flex gap-6 text-sm font-semibold">
      <a href="#services" className="hover:text-blue-600">
        Services
      </a>
      <a href="#contact" className="hover:text-blue-600">
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
              Stop Getting Ignored.
              <br />
              Start Fighting Back.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              We help everyday people take action against confusing systems,
              delays, denials, and unnecessary runarounds. Clear forms. Strong
              preparation. Real support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Get Help Now
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-gray-500 px-6 py-3 font-semibold text-white hover:bg-gray-800"
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
              When systems make things harder than they should be, you need a
              way to take action.
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
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
	<section className="px-6 py-20 bg-white">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="text-3xl font-bold md:text-4xl">
      Why Choose Us
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      We focus on clarity, affordability, and helping real people move forward without confusion.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <div className="p-6 border rounded-2xl shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Clear Guidance</h3>
        <p className="text-gray-600">
          We simplify complicated forms so you know exactly what you're doing.
        </p>
      </div>

      <div className="p-6 border rounded-2xl shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Affordable Help</h3>
        <p className="text-gray-600">
          Straightforward pricing without unnecessary legal fees.
        </p>
      </div>

      <div className="p-6 border rounded-2xl shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Built for You</h3>
        <p className="text-gray-600">
          Designed for everyday people—not corporations or large firms.
        </p>
      </div>
    </div>
  </div>
</section>
	<section className="px-6 py-20 bg-blue-600 text-white text-center">
  <div className="mx-auto max-w-3xl">
    <h2 className="text-3xl md:text-4xl font-bold">
      Ready to Get Started?
    </h2>

    <p className="mt-4 text-blue-100">
      Don’t wait. Take the first step and get the help you need today.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <a
        href="#contact"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
      >
        Start Now
      </a>

      <a
        href="tel:4255848159"
        className="border border-white px-6 py-3 rounded-lg font-semibold"
      >
        Call Now
      </a>
    </div>
  </div>
</section>
	
	<section className="px-6 py-20 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold">What We’re Building</h2>
    <p className="text-gray-600 mt-4">
      More than just document help — a growing platform designed to give everyday people real leverage.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    <div className="p-6 rounded-2xl border shadow-sm">
      <h3 className="font-bold text-lg mb-2">Phase 1</h3>
      <p className="text-gray-600">
        Document preparation for immigration, divorce, and court forms.
      </p>
    </div>

    <div className="p-6 rounded-2xl border shadow-sm">
      <h3 className="font-bold text-lg mb-2">Phase 2</h3>
      <p className="text-gray-600">
        Government filings including L&amp;I claims, DHS requests, and official submissions.
      </p>
    </div>

    <div className="p-6 rounded-2xl border shadow-sm">
      <h3 className="font-bold text-lg mb-2">Phase 3</h3>
      <p className="text-gray-600">
        Consumer complaint tools to help individuals take action against corporations.
      </p>
    </div>

    <div className="p-6 rounded-2xl border shadow-sm">
      <h3 className="font-bold text-lg mb-2">Future</h3>
      <p className="text-gray-600">
        AI-powered tools that help generate, organize, and track cases more efficiently.
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
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
            >
              Call Now
            </a>

            <a
              href="mailto:commonsensedocs@gmail.com"
              className="rounded-lg border border-gray-400 px-6 py-3 font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}