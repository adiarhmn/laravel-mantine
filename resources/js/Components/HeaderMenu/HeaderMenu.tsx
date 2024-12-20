import { Burger, Group } from "@mantine/core";
import { IconAdCircleFilled } from "@tabler/icons-react";

type Props = {
    opened: boolean;
    toggle: () => void;
};
export const HeaderMenu: React.FC<Props> = ({ opened, toggle }) => {
    return (
        <Group h={"100%"} justify="space-between">
            <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
            />

            <div className="flex justify-between">
                <div className="font-bold flex gap-1 items-center md:justify-center">
                    <IconAdCircleFilled className="text-blue-600" size={40} />
                    <div>
                        <div className="text-lg">AD Admin</div>
                        <div className="text-xs -mt-2 font-light text-slate-400">Created By Adi</div>
                    </div>
                </div>
                {/* <div className="font-bold hidden md:flex justify-between grow items-center">
                    <div className="font-semibold text-slate-400">Welcome back, Adi Aulia Rahman</div>
                    <div>Adi Aulia Rahman</div>
                </div> */}
            </div>
        </Group>
    );
};

export default HeaderMenu;
