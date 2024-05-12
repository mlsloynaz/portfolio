import ProjectList from "./projectList";
import { Projects as t } from '@/utils/resourceContent';

export default function Projects() {

    return (
        <>
            <div id="experience-section" className="pt-20 mt-[-80px]"></div>
            <div className="flex flex-col h-full text-grey-700 max-w-[1024px] px-6 sm:px-12 pt-20">
                <div className="flex flex-col h-full text-grey-700 ">
                    <h2 className="text-5xl pb-8">{t.title}</h2>
                    <p className="text-lg">{t.description}</p>
                </div>
                <ProjectList />
            </div>
        </>
    )
}