import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

import { StackParamList, BottomTabParamList, TopTabParamList } from '../navigation/types';
import { DrawerNavigator } from './Drawer';
import HomeProductDetailsNavigator from './HomeProduct/StackHomeProductDetailsNavigator';
import CartCheckoutPurchaseNavigator from './StackCartCheckoutPurchaseNavigator';
import SettingsScreen from '../screens/SettingsScreen';


const Stack = createStackNavigator<StackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

function TopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="TopTab1" component={HomeScreen} />
            {/* <TopTab.Screen name="TopTab2" component={DetailsScreen} /> */}
        </TopTab.Navigator>
    );
}

function BottomTabs() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen options={{ headerShown: false }} name="BrandIcon" component={HomeProductDetailsNavigator} />
            <BottomTab.Screen options={{ headerShown: false }} name="Notifications" component={NotificationsScreen} />
            <BottomTab.Screen options={{ headerShown: false }} name="CartCheckoutPurchase" component={CartCheckoutPurchaseNavigator} />
            <BottomTab.Screen options={{ headerShown: false }} name="Settings" component={SettingsScreen} />
        </BottomTab.Navigator>
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
