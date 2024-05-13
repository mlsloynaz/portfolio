import { projectData } from '@/app/utils/projectData';
import { ProjectDetail as t } from '@/utils/resourceContent';

import Image from 'next/image'
import {Navigation} from '@/components/project-details/navigation'

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const title = decodeURIComponent(params.id);
    const { years, description, company, image, shortDescription, logo, nextLink, prevLink } = projectData[title];
    const yearsStr = years.join(', ');

    return (
        <div className="flex flex-col p-4 md:px-28">
            <p className="text-3xl w-full bg-[#F6F1E7] rounded-lg p-4 text-slate-900">{title}</p>
            <Navigation prevLink={prevLink} nextLink={nextLink}/>
            <div className="flex flex-col flex-1 items-center md:flex-row md:justify-center gap-4 h-full md:h-[450px] p-4 md:w-84">
                <div className="w-full  ">
                    <p className="text-2xl pb-8" >{shortDescription}</p>
                    <p className="text-xl" >{description}</p>
                </div>
                <div className="w-full h-[350px] relative">
                    {image ? <Image
                        src={`/images/project/${image}`}
                        alt="Picture of the project"
                        className='object-contain'
                        layout="fill"
                    /> : <Image
                        src={`/images/project/default-image.png`}
                        alt="Default picture of a project"
                        className='object-contain'
                        layout="fill"
                    />}
                </div>
            </div>
            <div className="flex text-l flex-col md:flex-row md:justify-between py-4 md:py-8 px-4">
                <p>{t.company}
                    <span className="bg-black w-8 h-8 relative inline">
                        <Image
                            src={`/images/company/${logo}`}
                            alt=""
                            className='object-contain'
                            layout="fill"
                        />
                    </span><span>{company}</span></p>
                <p>{t.years} <span>{yearsStr}</span></p>
            </div>
            <div className="flex flex-col  p-4 bg-[#F6F1E7] text-slate-900 rounded-lg">
                <p className="text-3xl pb-8">{t.skills}</p>
                <div className="grid">images</div>
            </div>
        </div>
    )
}