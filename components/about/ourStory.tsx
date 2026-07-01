import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-[#111127] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-wider font-semibold">
              Our Story
            </p>
            <h2 className="text-white text-6xl font-bold leading-tight mt-5">
              From Frustration
              <span className="text-yellow-400"> to Foundation</span>
            </h2>
            <div className="space-y-3 mt-8 text-gray-300 leading-8 text-lg">
              <p>
                LemonTech was born out of a simple observation: most agencies
                overpromise and underdeliver. They hand clients beautiful decks
                full of vanity metrics while revenue stays flat. We decided to
                do things differently.
              </p>

              <p>
                We started by working with early-stage founders who couldn’t
                afford big-agency fees but needed big-agency results. We built
                lean, data-driven systems that punched far above their weight —
                and those early wins became our playbook.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/images/lemon tech.jpeg"
              alt="Our Story"
              width={800}
              height={800}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
