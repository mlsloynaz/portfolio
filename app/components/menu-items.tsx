import Link from 'next/link'
import { Header as t } from '@/utils/resourceContent';

type MenuItemsPro = {
    itemClass: string;
    listClass?: string;
}

export function MenuItems({ itemClass = "", listClass = "" }: MenuItemsPro) {
    const itemCommon="p-4"
    return (
        <ul role="menu" className={listClass}>
            <li role="menuitem" className={`${itemCommon} ${itemClass}`}>
                <Link href="/">{t.about}</Link>
            </li>
            <li role="menuitem" className={`${itemCommon} ${itemClass}`}>
                <Link href="/#experience-section">{t.experience}</Link>
            </li>
            <li role="menuitem" className={`${itemCommon} ${itemClass}`}>
                <Link href="/#contact-info-section">{t.contactInfo}</Link>
            </li>
        </ul>
    )
}