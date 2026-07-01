const cards = [
  {
    number: "01",
    title: "Revenue-Anchored Reporting",
    description:
      "Every metric we track is connected to a business outcome. We don't celebrate impressions—we celebrate revenue, leads acquisition costs.",
  },
  {
    number: "02",
    title: "Niche Specialization",
    description:
      "We help businesses define and own a specific niche—making your marketing sharper, cheaper, and more effective.",
  },
  {
    number: "03",
    title: "Full-Stack Capability",
    description:
      "Strategy, creative, copy, code, analytics—all under one roof. No managing five separate agencies or through the gaps between them.",
  },
  {
    number: "04",
    title: "Transparent Process",
    description:
      "You have a live dashboard from day one. Weekly reports and monthly strategy calls keep you informed.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#0d0d1f] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center uppercase tracking-widest text-yellow-400 font-semibold text-sm ">
          What We Do
        </p>

        <h2 className="text-center text-white font-bold mt-5 text-4xl sm:text-5xl md:text-6xl">
          Real Results,
          <span className="text-yellow-400"> Real Voices</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-[#24243D] border border-gray-600 rounded-2xl p-10 min-h-[200px] hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-6xl font-bold text-[#5B5A4A]">
                {card.number}
              </h3>

              <h4 className="text-white text-2xl font-semibold mt-4">
                {card.title}
              </h4>

              <p className="text-gray-400 mt-5 leading-8">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
