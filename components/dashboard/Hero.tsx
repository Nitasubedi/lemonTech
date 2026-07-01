import React from "react";
import HeroImage from "@/assets/hero-image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container max-w-6xl mx-auto flex flex-col items-center justify-between gap-12 px-6 py-10 md:py-16 lg:flex-row lg:py-15  p sm:px-6 lg:px-8">

      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-(--text-white)">

        <p className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-(--lemon-yellow) rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-(--lemon-yellow) bg-(--lemon-yellow)/10">
          {/* The solid dot indicator */}
          <span className="w-2 h-2 rounded-full bg-(--lemon-yellow)"></span>

          {/* The text content */}
          <span>Digital Marketing Agency</span>
        </p>

        <h1 className="mb-6 text-4xl sm:text-5xl font-bold leading-tight md:text-6xl">
          Build a Brand <br />
          That <span className="text-(--lemon-yellow)"> Dominates </span><br />
          Your{" "}
          <span className="text-(--lemon-green)">
            Niche
          </span>
        </h1>

        <p className="mb-8 text-base sm:text-lg leading-relaxed sm:leading-8 text-gray-300">
          We formalize your business structure, define your specialized niche,
          craft a powerful brand identity, and deploy data-driven tools to
          acquire clients and grow revenue.
        </p>

        <div className="mb-12 flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto rounded-md bg-(--lemon-green) px-6 py-3 font-semibold text-(--text-black) transition hover:opacity-90 cursor-pointer text-center">
            Start Your Growth →
          </button>

          <button className="relative w-full sm:w-auto border border-2-(--text-gray) rounded-md px-6 py-3 font-semibold text-(--text-white) transition-all duration-300 cursor-pointer overflow-hidden group text-center">
            {/* The text needs a relative z-index so it sits above the animated border */}
            <span className="relative z-10">Explore Services</span>

            {/* Animated yellow border (slides from left to right) */}
            <span className="absolute bottom-0 left-0 w-full h-0.75 bg-(--lemon-yellow) transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-gray-800 pt-6 lg:border-t-0 lg:pt-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--lemon-green)">
              150+
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Brands Transformed
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--lemon-green)">
              8X
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Average ROI Delivered
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--lemon-green)">
              98%
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Client Retention
            </p>
          </div>
        </div>
      </div>

      {/* Right Image - Hidden on mobile/tablet, absolutely positioned only on desktop */}
      <div className="hidden lg:flex lg:w-1/2 justify-center absolute bottom-5 right-20">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="h-auto w-full max-w-4xl"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;