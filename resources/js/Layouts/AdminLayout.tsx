import { AppShell, Burger, Container, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppLayout from "./AppLayout";
import { IconAdCircleFilled, IconHome2 } from "@tabler/icons-react";

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
                    <Group h={"100%"} justify="space-between" p={10}>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />

                        <div className="flex justify-between grow">
                            <div className="font-bold flex gap-1 items-center w-[300px] justify-center">
                                <IconAdCircleFilled
                                    className="text-blue-600"
                                    size={40}
                                />
                                AD Admin
                            </div>
                            <div className="font-bold hidden md:flex justify-between grow items-center">
                                <div className="font-normal">Dashboard</div>
                                <div>Adi Aulia Rahman</div>
                            </div>
                        </div>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <div className="flex flex-col gap-2">
                        <NavLink
                            href="#required-for-focus"
                            label="With icon"
                            className="rounded-lg"
                            active
                            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                        />
                        <NavLink
                            href="#required-for-focus"
                            label="With icon"
                            className="rounded-lg"
                            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                        />
                        <NavLink
                            href="#required-for-focus"
                            label="With icon"
                            className="rounded-lg"
                            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                        />
                    </div>
                </AppShell.Navbar>

                {/* Content */}
                <AppShell.Main>
                    <Container>{children}</Container>
                </AppShell.Main>
            </AppShell>
        </AppLayout>
    );
};

export default AdminLayout;
