import Bio from "@/components/bio";
import Projects from "@/components/projects";
import ContactDetails from "@/components/contact-details";

export default function Home() {
  return (
    <main className="flex h-full mt-32 flex-col items-center px-8 lg:px-28 ">
        <Bio/>
        <Projects/>
        <ContactDetails/>
    </main>
  );
}
