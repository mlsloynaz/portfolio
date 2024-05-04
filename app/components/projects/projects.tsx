import { projectData } from '@/utils/projectData'
import Thumbnail from "./thumbnail";
import { ProjectDataType } from "@/app/definitions/projectDataType";

export default function Projects() {
    const projects = projectData;
    return (
        <div id="project-section" className="flex flex-col w-full h-full max-w-96 min-w-72 md:max-w-full lg:max-w-[1024px]">
            <div className="flex flex-col h-full p-4 text-grey-700 ">
                <h2 className="text-2xl pb-8">Experience</h2>
                <p className="text-l">More than 10 years working in Javascript. I am able to navigate seamlessly in the full stack. Known for innovative problem-solving and a keen interest in staying updated with the latest tech trends.
                </p>
            </div>
            <div className="flex px-2 sm:px-5 items-center">
                <div className="h-8 w-8 bg-stone-300">aL</div>
                <div className="pt-8 px-4 sm:px-12 md:px-24 lg:px-32 overflow-hidden">
                    <div className="flex gap-8 overflow-x-auto">
                        {
                            projects.map(({ title, description, logo }: ProjectDataType) => <Thumbnail key={title} title={title} description={description} logo={logo} />)
                        }
                    </div>
                </div>
                <div className="h-8 w-8 bg-stone-300">aR</div>
            </div>
        </div>
    )
}
