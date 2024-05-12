"use client"

import { useEffect, useState, useRef } from 'react'
import Image from "next/image";
import { projectData } from '@/utils/projectData'
import { ProjectDataType } from "@/utils/definitions/projectDataType";
import chevron from '/public/images/chevron.svg'
import Thumbnail from './project-thumbnail';
import { Projects as t } from '@/utils/resourceContent';

const SCROLL_AMOUNT = 240

export default function ProjectList() {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollRight, setScrollRight] = useState(1);
    const containerRef = useRef(null);

    const projects = Object.values(projectData).map(({title, shortDescription, logo}: ProjectDataType) => {return {title, shortDescription, logo}})

    useEffect(() => {
        if (!containerRef.current) {
            return
        }

        const container = containerRef.current as HTMLElement;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const scrollRight = container.scrollWidth - container.clientWidth - scrollLeft;
            setScrollLeft(scrollLeft);
            setScrollRight(scrollRight)
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollLeftHandler = () => {
        if (!containerRef.current) {
            return
        }

        const container = containerRef.current as HTMLElement;
        const newScrollLeft = container.scrollLeft - SCROLL_AMOUNT;
        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        setScrollLeft(newScrollLeft);
    };

    const scrollRightHandler = () => {
        if (!containerRef.current) {
            return
        }

        const container = containerRef.current as HTMLElement;
        const newScrollLeft = container.scrollLeft + SCROLL_AMOUNT;
        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        setScrollLeft(newScrollLeft);
    };

    return (
        <div className="flex relative items-center justify-center">
            <div className="absolute h-12 w-12 transform rotate-180 left-0">
                {scrollLeft > 0 ?
                    <button onClick={scrollLeftHandler}>
                        <Image
                            src={chevron}
                            alt={t.goRightA11y}
                            layout='fill'
                            className="object-contain"
                        />
                    </button> : null}
            </div>
            <div className="pt-8 px-4 overflow-hidden w-[248px] sm:w-[488px] md:w-[728px]">
                <div ref={containerRef} className="flex gap-8 overflow-x-auto">
                    {
                        projects.map(({title, shortDescription, logo}) => <Thumbnail key={title} title={title} shortDescription={shortDescription} logo={logo} />)
                    }
                </div>
            </div>
            <div className="absolute h-12 w-12 right-0">
                {scrollRight ?
                    <button onClick={scrollRightHandler}>
                        <Image
                            src={chevron}
                            alt={t.goLeftA11y}
                            layout='fill'
                            className='object-contain'
                        />
                    </button> : null}
            </div>
        </div>
    )
}