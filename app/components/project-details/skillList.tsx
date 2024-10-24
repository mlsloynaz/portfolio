import { SkillItem } from './skillItem';

export function SkillList({ skills }: { skills: string[] }) {
    return (
        <div className="mx-auto flex max-w-6xl flex-wrap rounded-lg text-slate-900">
            {skills.map((skill: string) => {
                return <SkillItem key={skill} skillName={skill} />;
            })}
        </div>
    );
}
