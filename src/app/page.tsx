import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { PlatformArchitecture } from "@/components/sections/PlatformArchitecture";
import { DataFactory } from "@/components/sections/DataFactory";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { ClinicalApplications } from "@/components/sections/ClinicalApplications";
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
      <PlatformArchitecture />
      <DataFactory />
      <WhyDifferent />
      <ClinicalApplications />
      <Security />
      <Collaboration />
      <Vision />
      <FAQ />
      <ContactCTA />
    </>
  );
}
