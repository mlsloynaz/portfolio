import Link from 'next/link';
import { Header as t } from '@/utils/resourceContent';

const sections = [
    {
        name: t.about,
        url: '/',
    },
    {
        name: t.experience,
        url: '#experience-section',
    },
    {
        name: t.contactInfo,
        url: '#contact-info-section',
    },
];

type MenuItemsPro = {
    itemClass: string;
    listItemClass?: string;
    listClass?: string;
};

export function MenuItems({
    itemClass = '',
    listClass = '',
    listItemClass = '',
}: MenuItemsPro) {
    return (
        <ul role="menu" className={listClass}>
            {sections.map(({ name, url }) => (
                <li key={url} role="menuitem" className={listItemClass}>
                    <Link className={itemClass} href={url}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
