"use client"

import { useEffect, useState, useRef } from 'react'
import Image from "next/image";
import { projectData } from '@/utils/projectData'
import { ProjectDataType } from "@/utils/definitions/projectDataType";
import chevron from '/public/images/chevron.svg'
import Thumbnail from './project-thumbnail';
import { Projects as t } from '@/utils/resourceContent';

const SCROLL_STEP = 240

export default function ProjectList() {
    const [lastIndex, setLastIndex] = useState(0);
    const containerRef = useRef(null);

    const projects = Object.values(projectData).map(({ title, shortDescription, logo }: ProjectDataType) => { return { title, shortDescription, logo } })

    useEffect(() => {
        if (!containerRef.current) {
            return
        }

        const container = containerRef.current as HTMLElement;

        const handleScroll = () => {
            const index = Math.round(container.scrollLeft / SCROLL_STEP);
            console.log(index);
            setLastIndex(index);
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToView = (index: number) => {
        if (!containerRef.current) {
            return
        }

        const container = containerRef.current as HTMLElement;
        const scrollQty = SCROLL_STEP * index
        console.log({scrollQty , containerScrollLeft:container.scrollLeft})
        const newScrollLeft = scrollQty;
        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        setLastIndex(index);
    };


    return (
        <div className="flex flex-col relative items-center justify-center">

            <div className="py-8 px-4 overflow-hidden w-[248px] sm:w-[488px] md:w-[728px] snap-mandatory">
                <div ref={containerRef} className="flex gap-8 overflow-x-auto snap-x-mandatory">
                    {
                        projects.map(({ title, shortDescription, logo },) => <Thumbnail key={title} title={title} shortDescription={shortDescription} logo={logo} />)
                    }
                </div>
            </div>
            <div className="flex">
                {projects.map((_, idx) => (
                    <div key={idx} onClick={() => scrollToView(idx)} className={`cursor-pointer w-2 h-2 bg-[#474B96] mx-1  rounded-xl ${lastIndex===idx? "bg-opacity-100": "bg-opacity-55"}`}/>
                ))}
            </div>
        </div>
    )
}