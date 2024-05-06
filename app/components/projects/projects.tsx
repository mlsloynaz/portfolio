import ProjectList from "./projectList";

export default function Projects() {

    return (
        <div id="experience-section" className="flex flex-col w-full h-full max-w-96 min-w-72 md:max-w-full lg:max-w-[1024px]">
            <div className="flex flex-col h-full p-4 text-grey-700 ">
                <h2 className="text-2xl pb-8">Experience</h2>
                <p className="text-l">More than 10 years working in Javascript. I am able to navigate seamlessly in the full stack. Known for innovative problem-solving and a keen interest in staying updated with the latest tech trends.
                </p>
            </div>
            <ProjectList />
        </div>
    )
}
