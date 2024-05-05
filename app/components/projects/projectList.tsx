"use client"

import { useEffect, useState, useRef } from 'react'
import Image from "next/image";
import { projectData } from '@/utils/projectData'
import { ProjectDataType } from "@/app/utils/definitions/projectDataType";
import chevron from '/public/images/chevron.svg'
import Thumbnail from './thumbnail';

const SCROLL_AMOUNT = 240

export default function ProjectList() {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollRight, setScrollRight] = useState(1);
    const containerRef = useRef(null);

    const projects = projectData;

    useEffect(() => {
        if (!containerRef.current) {
            return
        }

        const container = containerRef.current as HTMLElement;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const scrollRight = container.scrollWidth - container.clientWidth - scrollLeft;
            console.log({ scrollRight })
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
        <div className="flex sm:px-5 items-center">
            <div className="relative h-36 w-36 min-w-10 transform rotate-180">
                {scrollLeft > 0 ?
                    <button onClick={scrollLeftHandler}>
                        <Image
                            src={chevron}
                            alt="go right"
                            layout='fill'
                            className="object-contain"
                        />
                    </button> : null}
            </div>
            <div className="pt-8 px-8 overflow-hidden">
                <div ref={containerRef} className="flex gap-8 overflow-x-auto">
                    {
                        projects.map(({ title, description, logo }: ProjectDataType) => <Thumbnail key={title} title={title} description={description} logo={logo} />)
                    }
                </div>
            </div>
            <div className="relative h-36 w-36 min-w-10">
                {scrollRight ?
                    <button onClick={scrollRightHandler}>
                        <Image
                            src={chevron}
                            alt="go left"
                            layout='fill'
                            className='object-contain'
                        />
                    </button> : null}
            </div>
        </div>
    )
}