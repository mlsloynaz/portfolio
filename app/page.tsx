import Bio from '@/components/bio';
import Projects from '@/components/projects';
import ContactDetails from '@/components/contact-details';

export default function Home() {
    return (
        <main
            id="main-content"
            tabIndex={-1}
            className="flex h-full w-full flex-col items-center overflow-x-hidden pt-32 lg:pb-20 "
        >
            <Bio />
            <Projects />
            <ContactDetails />
        </main>
    );
}
