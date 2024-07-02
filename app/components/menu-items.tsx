import Link from 'next/link'
import { Header as t } from '@/utils/resourceContent';

type MenuItemsPro = {
    itemClass: string;
    listItemClass?:string;
    listClass?: string;
}

export function MenuItems({ itemClass = "", listClass = "" , listItemClass=""}: MenuItemsPro) {
    const itemCommon="p-4"
    return (
        <ul role="menu" className={listClass}>
            <li role="menuitem" className={listItemClass}>
                <Link className={`${itemCommon} ${itemClass}`} href="/">{t.about}</Link>
            </li>
            <li role="menuitem" className={listItemClass}>
                <Link className={`${itemCommon} ${itemClass}`} href="/#experience-section">{t.experience}</Link>
            </li>
            <li role="menuitem" className={listItemClass}>
                <Link className={`${itemCommon} ${itemClass}`} href="/#contact-info-section">{t.contactInfo}</Link>
            </li>
        </ul>
    )
}