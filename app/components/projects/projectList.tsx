'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { projectData } from '@/utils/projectData';
import { ProjectDataType } from '@/utils/definitions/projectDataType';
import chevron from '/public/images/chevron.svg';
import Thumbnail from './project-thumbnail';
import { Projects as t } from '@/utils/resourceContent';

const SCROLL_STEP = 240;

export default function ProjectList() {
    const [lastIndex, setLastIndex] = useState(0);
    const containerRef = useRef(null);

    const projects = Object.values(projectData).map(
        ({ title, shortDescription, logo }: ProjectDataType) => {
            return { title, shortDescription, logo };
        },
    );

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const container = containerRef.current as HTMLElement;

        const handleScroll = () => {
            const index = Math.round(container.scrollLeft / SCROLL_STEP);
            setLastIndex(index);
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToView = (index: number) => {
        if (!containerRef.current) {
            return;
        }

        const container = containerRef.current as HTMLElement;
        const scrollQty = SCROLL_STEP * index;
        const newScrollLeft = scrollQty;
        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        setLastIndex(index);
    };

    return (
        <div className="flex-center relative flex-col">
            <div className="w-[248px] snap-mandatory overflow-hidden px-4 py-8 sm:w-[488px] md:w-[728px]">
                <div
                    ref={containerRef}
                    className="snap-x-mandatory flex gap-8 overflow-x-auto"
                >
                    {projects.map(({ title, shortDescription, logo }) => (
                        <Thumbnail
                            key={title}
                            title={title}
                            shortDescription={shortDescription}
                            logo={logo}
                        />
                    ))}
                </div>
            </div>
            <div className="flex">
                {projects.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => scrollToView(idx)}
                        className={`mx-1 h-2 w-2 cursor-pointer rounded-xl  bg-[#474B96] ${lastIndex === idx ? 'bg-opacity-100' : 'bg-opacity-55'}`}
                    />
                ))}
            </div>
        </div>
    );
}
