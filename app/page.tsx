import Bio from "@/components/bio";
import Projects from "@/components/projects";
import ContactDetails from "@/components/contact-details";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center px-4 w-full max-w-[90%]   lg:max-w-[1024px] ">
      <Bio />
      <Projects />
      <ContactDetails />
    </main>
  );
}
