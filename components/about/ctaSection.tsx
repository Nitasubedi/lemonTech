import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#0d0d1f] py-28 border-b border-gray-700">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Small Heading */}
        <p className="uppercase tracking-widest text-yellow-400 text-sm font-semibold">
          WORK WITH US
        </p>

        {/* Heading */}
        <h2 className="text-white text-5xl lg:text-7xl font-bold leading-tight mt-6">
          Enough Reading.
          <br />
          Lets <span className="text-yellow-400">Talk Results.</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mt-8">
          Book a free strategy session and we will map out exactly how LemonTech
          can grow your business in 90 days.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
          {/* Yellow Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition duration-300 flex items-center justify-center gap-2">
            Book Free Call
            <ArrowRight size={20} />
          </button>

          {/* Outline Button */}
          <button className="border-2 border-gray-500 text-white hover:border-yellow-400 hover:text-yellow-400 font-semibold px-8 py-4 rounded-full transition duration-300">
            See Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
