import { AboutSection, Features, Vision } from "@/components";

export default function About() {
  return (
    <div className="flex flex-col gap-section mb-section">
      <AboutSection />
      <Features />
      <Vision />
    </div>
  );
}
