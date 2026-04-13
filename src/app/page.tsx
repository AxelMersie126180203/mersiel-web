import {
  CapabilitiesSection,
  ClosingSection,
  HeroSection,
  ManifestoSection,
  ProcessSection,
  ShowcaseSection,
  ValuesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <ShowcaseSection />
      <ProcessSection />
      <ValuesSection />
      <ManifestoSection />
      <ClosingSection />
    </>
  );
}
