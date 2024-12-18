import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppLayout from "./AppLayout";

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
                    <Group justify="space-between" px={10} pt={10}>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <div className="font-bold">Adi Aulia Rahman</div>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <div>Navbar</div>
                    <div>Navbar</div>
                    <div>Navbar</div>
                    <div>Navbar</div>
                    <div>Navbar</div>
                </AppShell.Navbar>

                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </AppLayout>
    );
};

export default AdminLayout;
