import { projectData } from '@/app/utils/projectData';
import { ProjectDetail as t } from '@/utils/resourceContent';

import Image from 'next/image'
import { Navigation } from '@/components/project-details/navigation'
import { SkillList } from '@/components/project-details/skillList';

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const title = decodeURIComponent(params.id);
    const { years, description, company, image, shortDescription, logo, nextLink, prevLink, skills } = projectData[title];
    const yearsStr = years.join(', ');

    return (
        <main className="flex flex-col p-4  w-full max-w-[1024px] px-6 sm:px-12">
            <h1 className="text-3xl w-full bg-[#F6F1E7] rounded-lg p-4 text-slate-900">{title}</h1>
            <Navigation prevLink={prevLink} nextLink={nextLink} />
            <div className="flex flex-col flex-1 items-center md:flex-row md:justify-center gap-4 h-full md:h-[450px] p-4 md:w-84">
                <div className="w-full  ">
                    <p className="text-2xl pb-8" >{shortDescription}</p>
                    <p className="text-xl" >{description}</p>
                </div>
                <div className="w-full h-[350px] relative">
                    {image ? <Image
                        src={`/images/project/${image}`}
                        alt={`${title}, ${shortDescription}`}
                        className='object-contain'
                        fill
                    /> : <Image
                        src={`/images/project/default-image.png`}
                        alt={t.defaultPicAlt}
                        className='object-contain'
                        fill
                    />}
                </div>
            </div>
            <div className="flex w-full text-l flex-col md:flex-row md:justify-between py-4 md:py-8 px-4">
                <p className='flex items-center'>{t.company}
                    <span className="flex items-center w-8 h-8 relative">
                        <Image
                            src={`/images/company/${logo}`}
                            alt=""
                            width={30}
                            height={30}
                        />
                    </span>
                    <span>{company}</span>
                </p>
                <p>{t.years} <span>{yearsStr}</span></p>
            </div>
            <p className="text-2xl w-full bg-[#F6F1E7] rounded-lg p-4 text-slate-900">{t.skills}</p>
            <SkillList skills={skills} />
        </main>
    )
}