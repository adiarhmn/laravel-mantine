import { router, usePage } from "@inertiajs/react";
import { ActionIcon, NavLink } from "@mantine/core";

type Menu = {
    label: string;
    icon: React.FC<any>;
    href: string;
    sublinks?: {
        label: string;
        href: string;
    }[];
};

type Props = {
    menu: Menu[];
};

// Navbar Item Components
const NavbarItem: React.FC<Menu> = ({ label, icon: Icon, href, sublinks }) => {
    const { url } = usePage();
    return (
        <NavLink
            className="rounded-lg"
            leftSection={
                <ActionIcon size="lg">
                    <Icon size={22} />
                </ActionIcon>
            }
            label={label}
            active={url.startsWith(href) && !sublinks}
            onClick={() => (!sublinks ? router.visit(href) : null)}
            defaultOpened={sublinks && url.startsWith(href)}
            childrenOffset={20}
        >
            {sublinks?.map((item, index) => (
                <div
                    key={index}
                    className={`border-l-2 ${
                        url.startsWith(item.href) ? "border-blue-600" : ""
                    }`}
                >
                    <NavLink
                        className="rounded-r-lg"
                        label={item.label}
                        active={url.startsWith(item.href)}
                        onClick={() => router.visit(item.href)}
                    />
                </div>
            ))}
        </NavLink>
    );
};

// Navbar Menu Components
const NavbarMenu: React.FC<Props> = ({ menu }) => {
    return (
        <div className="flex flex-col gap-1">
            {menu.map((item, index) => (
                <NavbarItem key={index} {...item} />
            ))}
        </div>
    );
};

export default NavbarMenu;
