import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import MainWrapper from "../screens/Wrapper/MainWrapper";
import { Pressable, Text } from "react-native";
import ToggleTheme from "../components/ToggleThemeBtn";
import { useTheme } from "../hooks/useTheme";
import { DrawerParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Button, useTheme as useThemeApp } from "@ui-kitten/components";
import { ThemeContext } from "../../theme-context";
import { useContext } from "react";

const Drawer = createDrawerNavigator<DrawerParamList>();


export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const { themeStyle, } = useTheme(); // Use the custom hook
    const themeApp = useThemeApp()
    const { theme } = useContext(ThemeContext);

    return (
        <MainWrapper style={{ ...themeStyle, alignItems: 'flex-start', }}>
            <Button appearance="ghost" status="success" style={{ borderWidth: 0, width: '100%' }} onPress={() => props.navigation.navigate('Home')}>Home</Button>
            <Button appearance="ghost" status="success" style={{ borderWidth: 0, width: '100%' }} onPress={() => props.navigation.navigate('Settings')} >Settings</Button>
            <ToggleTheme />
        </MainWrapper>
    );
};

export function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="Home" component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="Settings" component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}