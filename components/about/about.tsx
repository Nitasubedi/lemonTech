export default function AboutHero() {
  return (
    <section className="bg-[#0d0d1f] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="flex justify-between items-center">
          {/* Left Content */}
          <div className="w-1/2">
            {/* Badge */}
            <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-green-500 font-semibold">
              • ABOUT LEMONTECH
            </span>

            {/* Heading */}
            <h1 className="text-white text-7xl font-bold leading-tight mt-8">
              We Make Invisible
              <br />
              Brands <span className="text-yellow-400">Impossible</span>
              <br />
              to Ignore
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-xl leading-9 mt-8 max-w-xl">
              We are a digital marketing agency built by strategists, designers,
              and data obsessives who believe every business deserves a brand as
              strong as its product.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-1/2">{/* Image goes here later */}</div>
        </div>
      </div>
    </section>
  );
}
