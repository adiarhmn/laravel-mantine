import '@mantine/core/styles.css';
import "@mantine/notifications/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import React from "react";
import { Notifications } from "@mantine/notifications";

// Define the props type for the AppLayout component
type Props = {
    children: React.ReactNode;
};

const theme = createTheme({
    fontFamily: "Poppins, sans-serif",
});

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <MantineProvider>
            <Notifications />
            <ModalsProvider>
            <main>{children}</main>
            </ModalsProvider>
        </MantineProvider>
    );
};

export default AppLayout;
