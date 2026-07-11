import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { TwoProducts } from "@/components/sections/TwoProducts";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Specialties } from "@/components/sections/Specialties";
import { Security } from "@/components/sections/Security";
import { Collaboration } from "@/components/sections/Collaboration";
import { Vision } from "@/components/sections/Vision";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <WhatWeBuild />
      <TwoProducts />
      <WhyDifferent />
      <Specialties />
      <Security />
      <Collaboration />
      <Vision />
      <FAQ />
      <ContactCTA />
    </>
  );
}
