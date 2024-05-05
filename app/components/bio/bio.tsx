import Image from "next/image";
import bgLogo from '/public/images/bg-logo.png'

export default function Bio() {
    return (
        <div id="bio-section" className="flex flex-col w-full h-full max-w-96 min-w-72 md:max-w-full lg:max-w-[1024px]">
            <div className="flex flex-col md:flex-row md:h-56 lg:h-80">
                <div id="bio" className="flex flex-col h-full p-4 bg-gradient-to-b from-blue-800 to-gray-700 text-stone-100 max-w-96 min-w-72">
                    <h1 className="text-2xl py-8">HI, I am Maria
                        Sierra Loynaz </h1>
                    <p className="text-l">Experienced Web developer with a strong focus on JavaScript, specializing in React, Typescript, NodeJs.</p>
                </div>
                <div id="profile-pic" className="relative h-32 w-full md:h-full lg:h-full">
                    <Image
                        src={bgLogo}
                        alt="Picture of the author"
                        layout='fill'
                        className='object-cover'
                        placeholder="blur"
                        blurDataURL=""
                    />
                </div>
            </div>
            <div id="bio-more" className="flex flex-col h-full p-4 text-grey-700 ">
                <p className="text-2xl py-8">Flexible, passionate and quick learner</p>
                <p className="text-l">More than 10 years working in Javascript. I am able to navigate seamlessly in the full stack. Known for innovative problem-solving and a keen interest in staying updated with the latest tech trends.</p>
            </div>
        </div>
    )
}
