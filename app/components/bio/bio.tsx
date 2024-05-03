import Image from "next/image";
import profilePic from '../public/images/profile-pic.png'
import bgLogo from '/public/images/bg-logo.png'

export default function Bio() {
    return (
        <div className="flex w-full h-full bg-stone-200 justify-center">
            {/* <div id="profile-pic" className="md:block relative bg-stale-300 min-w-[200px] md:min-w-[300px]">
                <Image
                    src={profilePic}
                    alt="Picture of the author"
                    layout='fill'
                    objectFit='cover'
                    placeholder="blur" // Optional blur-up while loading
                />
            </div> */}
            <div id="bio" className="relative flex flex-col h-full bg-blue-600 text-stone-100 p-12 max-w-96 min-w-72">
                <p className="text-2xl">HI, I am Maria
                    Sierra Loynaz </p>
                <p className="text-l pt-8">Experienced Web developer with a strong focus on JavaScript, specializing in React, Typescript, NodeJs.</p>
            </div>

            <div id="bg-logo" className="hidden ">
                <Image
                    src={bgLogo}
                    alt="Picture of the author"
                    layout='fill'
                    objectFit='cover'
                    placeholder="blur" // Optional blur-up while loading
                    className="rounded-full"
                />
            </div>
        </div>
    )
}
