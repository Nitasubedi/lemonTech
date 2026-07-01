import About from "@/components/about/about";
import CoreValues from "@/components/about/coreValues";
import CTASection from "@/components/about/ctaSection";
import OurStory from "@/components/about/ourStory";
import WhatWeDo from "@/components/about/whatWeDo";

export default function AboutPage() {
  return (
    <main>
      <About />
      <OurStory />
      <WhatWeDo />
      <CoreValues />
      <CTASection />

    </main>
  );
}
