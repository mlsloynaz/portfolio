import { projectData } from '@/app/utils/projectData';
import { ProjectDetail as t } from '@/utils/resourceContent';

import Image from 'next/image';
import { Navigation } from '@/app/components/project-details/navigation';
import { SkillList } from '@/app/components/project-details/skillList';

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const title = decodeURIComponent(params.id);
    const {
        years,
        description,
        company,
        image,
        shortDescription,
        logo,
        nextLink,
        prevLink,
        skills,
    } = projectData[title];
    const yearsStr = years.join(', ');

    return (
        <main className="content-page">
            <h2 className="w-full rounded-lg bg-[#F6F1E7] p-4 text-slate-900">
                {title}
            </h2>
            <Navigation prevLink={prevLink} nextLink={nextLink} />
            <div className="md:w-84 flex h-full flex-1 flex-col items-center gap-4 p-4 md:h-[450px] md:flex-row md:justify-center">
                <div className="w-full  ">
                    <p tabIndex={0} className="pb-8 text-2xl">
                        {shortDescription}
                    </p>
                    <p tabIndex={0} className="text-xl">
                        {description}
                    </p>
                </div>
                <div className="relative h-[350px] w-full">
                    {image ? (
                        <Image
                            src={`/images/project/${image}`}
                            alt={`${title}, ${shortDescription}`}
                            className="object-contain"
                            fill
                        />
                    ) : (
                        <Image
                            src={`/images/project/default-image.webp`}
                            alt={t.a11yDefaultPicAlt}
                            className="object-contain"
                            fill
                        />
                    )}
                </div>
            </div>
            <div className="text-l flex w-full flex-col px-4 py-4 md:flex-row md:justify-between md:py-8">
                <p tabIndex={0} className="flex items-center">
                    {t.company}
                    <span className="relative flex h-8 w-8 items-center">
                        <Image
                            src={`/images/company/${logo}`}
                            alt=""
                            width={90}
                            height={90}
                        />
                    </span>
                    <span>{company}</span>
                </p>
                <p tabIndex={0}>
                    {t.years} <span>{yearsStr}</span>
                </p>
            </div>
            <p
                tabIndex={0}
                className="w-full rounded-lg bg-[#F6F1E7] p-4 text-2xl text-slate-900"
            >
                {t.skills}
            </p>
            <SkillList skills={skills} />
        </main>
    );
}
