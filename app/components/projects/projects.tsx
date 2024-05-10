import ProjectList from "./projectList";
import {Projects as t} from  '@/utils/resourceContent';

export default function Projects() {

    return (
        <div id="experience-section" className="flex flex-col w-full py-8">
            <div className="flex flex-col h-full text-grey-700 ">
                <h2 className="text-2xl pb-8">{t.title}</h2>
                <p className="text-l">{t.description}</p>
            </div>
            <ProjectList />
        </div>
    )
}
