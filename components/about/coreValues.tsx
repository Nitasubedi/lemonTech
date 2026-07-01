import { Plus, BarChart3, Handshake } from "lucide-react";

const values = [
  {
    icon: Plus,
    color: "text-blue-500",
    title: "Clarity Over Complexity",
    description:
      "Simple strategies, clearly explained, consistently executed. Marketing doesn't need to be mysterious.",
  },

  {
    icon: BarChart3,
    color: "text-yellow-400",
    title: "Data Over Gut Feel",
    description:
      "Every decision is backed by evidence. We test, measure, and iterate — always improving on what works.",
  },

  {
    icon: Handshake,
    color: "text-green-500",
    title: "Partnership Over Transactions",
    description:
      "We succeed when our clients succeed. That's not a slogan — it's how we've structured our entire business model.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#111127] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Small Heading */}

        <p className="text-center uppercase tracking-widest text-yellow-400 font-semibold text-sm ">
          WHAT WE DO
        </p>

        {/* Main Heading */}

        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-5">
          Core
          <span className="text-yellow-400"> Values</span>
        </h2>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-[#24243D]
                border
                border-gray-600
                rounded-2xl
                p-10
                text-center
                transition-all
                duration-300
                hover:border-yellow-400
                hover:-translate-y-2
                "
              >
                {/* Icon */}

                <div className="flex justify-center">
                  <Icon size={42} className={item.color} strokeWidth={1.8} />
                </div>

                {/* Title */}

                <h3 className="text-white text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-8 mt-5">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
