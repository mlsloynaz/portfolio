import { projectData } from '@/app/utils/projectData';
import {ProjectDetail as t} from  '@/utils/resourceContent';


export default function ProjectDetails({ params }: { params: { id: string } }) {
    const title = decodeURIComponent(params.id);
    const {years, description, company} = projectData[title];
    
    const yearsStr= years.join(', ');
    
    return (
        <div className="flex flex-col p-4 md:px-28">
            <p className="text-3xl bg-[#F6F1E7] rounded-lg p-4 text-slate-900">{title}</p>
            <div className="flex flex-col md:flex-row md:justify-center py-8 gap-4 h-96">
                <div className="flex flex-col w-60 md:w-96 px-4 justify-between">
                    <p className="text-l pb-8" >{description}</p>
                    <div className="text-l">
                        <p>{t.years} <span>{yearsStr}</span></p>
                        <p>{t.company}<span className="bg-black w-8 h-8"></span><span>{company}</span></p>
                    </div>
                </div>
                <div className="w-60 md:w-96 relative">
                    Image
                </div>
            </div>
            <div className="flex flex-col p-4 bg-[#F6F1E7] text-slate-900 rounded-lg">
                <p className="text-3xl pb-8">{t.skills}</p>
                <div className="grid">images</div>
            </div>
        </div>
    )
}