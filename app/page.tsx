import Bio from "@/components/bio";
import Projects from "@/components/projects";
import ContactDetails from "@/components/contact-details";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-hidden flex h-full flex-col items-center w-full pt-32">
      <Bio />
      <Projects />
      <ContactDetails />
    </main>
  );
}
