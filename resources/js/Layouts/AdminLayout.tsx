import { AppShell, Burger, Container, Group } from "@mantine/core";
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
                    <Group h={"100%"} justify="space-between" p={10}>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <div className="flex justify-between grow">
                            <div className="font-bold">Admin UI</div>
                            <div className="font-bold hidden md:block">Adi Aulia Rahman</div>
                        </div>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <div>Navbar</div>
                    <div>Navbar</div>
                    <div>Navbar</div>
                    <div>Navbar</div>
                    <div>Navbar</div>
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
