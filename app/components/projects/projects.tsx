import ProjectList from './projectList';
import { Projects as t } from '@/utils/resourceContent';

export default function Projects() {
    return (
        <section
            id="experience-section"
            aria-labelledby="title-experience"
            className="section-spacing scroll-mt-32"
        >
            <div className="flex h-full flex-col text-gray-700">
                <h2 id="title-experience">{t.title}</h2>
                <p className="text-lg">{t.description}</p>
            </div>
            <ProjectList />
        </section>
    );
}
