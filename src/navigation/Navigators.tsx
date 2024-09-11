import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

import { StackParamList, DrawerParamList, BottomTabParamList, TopTabParamList } from '../navigation/types';

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

function TopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="TopTab1" component={HomeScreen} />
            <TopTab.Screen name="TopTab2" component={DetailsScreen} />
        </TopTab.Navigator>
    );
}

function BottomTabs() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen options={{ headerShown: false }} name="BrandIcon" component={DrawerNavigator} />
            <BottomTab.Screen options={{ headerShown: false }} name="Details" component={DetailsScreen} />
        </BottomTab.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
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

function AuthNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}  // Hides the header
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}  // Hides the header
            />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Auth"
                component={AuthNavigator}
                options={{ headerShown: false }}  // Hides the header
            />
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{ headerShown: false }}  // Hides the header
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;
