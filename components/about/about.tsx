export default function AboutHero() {
  return (
    <section className="min-h-[70vh] bg-[#0d0d1f] flex  pt-10 lg:pt-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-2/3">
            {/* Badge */}
            <span className="inline-block rounded-full border border-yellow-500 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-green-500">
              • ABOUT LEMONTECH
            </span>

            {/* Heading */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-8">
              We Make Invisible
              <br />
              Brands <span className="text-yellow-400">Impossible</span>
              <br />
              to Ignore
            </h1>

            {/* Paragraph */}
            <p className="mt-8 max-w-xl text-base sm:text-lg lg:text-xl leading-8 lg:leading-9 text-gray-300">
              We are a digital marketing agency built by strategists, designers,
              and data obsessives who believe every business deserves a brand as
              strong as its product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
