import ProjectList from "./projectList";
import { Projects as t } from '@/utils/resourceContent';

export default function Projects() {

    return (
        <section id="experience-section" aria-labelledby="title-experience" className="flex flex-col h-full text-grey-700 page-width pt-20 scroll-mt-32">
            <div className="flex flex-col h-full text-grey-700 ">
                <h2 id="title-experience" className="text-5xl pb-8">{t.title}</h2>
                <p className="text-lg">{t.description}</p>
            </div>
            <ProjectList />
        </section>

    )
}