import { AppShell, Burger, Container, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppLayout from "./AppLayout";
import {
    IconAdCircleFilled,
    IconHome2,
    IconLayoutGrid,
} from "@tabler/icons-react";
import HeaderMenu from "@/Components/HeaderMenu/HeaderMenu";
import NavbarMenu from "@/Components/NavbarMenu/NavbarMenu";

type Props = {
    children: React.ReactNode;
};

const AdminLayout: React.FC<Props> = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppLayout>
            <AppShell
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: { mobile: !opened },
                }}
                padding="md"
                withBorder
            >
                <AppShell.Navbar p="md">
                    {/* Logo and Brand */}
                    <Group px={10} mb={25} justify="space-between">
                        <div className="flex gap-1 items-center md:justify-center">
                            <IconAdCircleFilled
                                className="text-blue-600"
                                size={40}
                            />
                            <div>
                                <div className="text-lg font-semibold">
                                    AD Admin
                                </div>
                                <div className="text-xs -mt-2 font-light text-slate-400">
                                    Created By Adi
                                </div>
                            </div>
                        </div>

                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                    </Group>

                    {/* Navbar Menu */}
                    <NavbarMenu
                        menu={[
                            {
                                label: "Dashboard",
                                icon: IconHome2,
                                href: "/dashboard",
                            },
                            {
                                label: "Settings",
                                icon: IconAdCircleFilled,
                                href: "/settings",
                            },
                            {
                                label: "Components",
                                icon: IconLayoutGrid,
                                href: "/components",
                                sublinks: [
                                    {
                                        label: "Button",
                                        href: "/components/button",
                                    },
                                    {
                                        label: "Input",
                                        href: "/components/input",
                                    },
                                ],
                            },
                        ]}
                    />
                </AppShell.Navbar>

                {/* Content */}
                <AppShell.Main>
                    <HeaderMenu opened={opened} toggle={toggle} />
                    <main>{children}</main>
                </AppShell.Main>
            </AppShell>
        </AppLayout>
    );
};

export default AdminLayout;
