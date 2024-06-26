import { Pressable } from "react-native";
import * as React from "react";
// components
import SvgShop from "@/components/icon/shop";
import SvgSetting from "@/components/icon/setting";
// contextss
import useThemeContext from "@/contexts/hook/use-theme-context";

const ICONS: { [key: string]: React.FC<{ color: string }>; } = {
    Shop: SvgShop,
    Setting: SvgSetting
};

type Props = {
    iconName: string;
    color: string;
    onPress: () => void;
    onLongPress: () => void;
};

const IconTabBar = ({ iconName, color, onPress, onLongPress }: Props) => {

    const { colors } = useThemeContext();

    const IconComponent = ICONS[iconName] || null;
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            android_ripple={{ color: colors.primary, borderless: true }}
            style={{ width: 32, height: 32, justifyContent: "center", alignItems: "center" }}
        >
            {IconComponent && <IconComponent color={color} />}
        </Pressable>
    );
};


export default IconTabBar;
