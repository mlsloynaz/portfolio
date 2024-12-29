import { ContactMeForm } from '@/app/components/contact-me';
import { ContactMe as t } from '@/utils/resourceContent';

export default function ContactMe() {
    return (
        <main className="content-page">
            <h2 className="rounded-lg bg-[#F6F1E7] p-4 text-slate-900">
                {t.title}
            </h2>
            <div className="py-8">
                <ContactMeForm />
            </div>
        </main>
    );
}
