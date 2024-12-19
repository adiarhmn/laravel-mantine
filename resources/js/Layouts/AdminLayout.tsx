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
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: { mobile: !opened },
                }}
                padding="md"
                withBorder
            >
                <AppShell.Header>
                    <HeaderMenu opened={opened} toggle={toggle} />
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <NavbarMenu
                        menu={[
                            {
                                label: "Dashboard",
                                icon: IconHome2,
                                href: "/dashboard",
                                active: true,
                            },
                            {
                                label: "Settings",
                                icon: IconAdCircleFilled,
                                href: "/settings",
                                active: false,
                            },
                            {
                                label: "Components",
                                icon: IconLayoutGrid,
                                href: "/components",
                                active: false,
                                sublinks: [
                                    {
                                        label: "Button",
                                        href: "/components/button",
                                        active: false,
                                    },
                                    {
                                        label: "Input",
                                        href: "/components/input",
                                        active: false,
                                    },
                                ],
                            },
                        ]}
                    />
                </AppShell.Navbar>

                {/* Content */}
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </AppLayout>
    );
};

export default AdminLayout;
