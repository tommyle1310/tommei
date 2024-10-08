// types.ts
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

// Stack Navigator types
export type StackParamList = {
    Drawer: undefined;
    BottomTabs: undefined;
    Auth: undefined;
    TopTabs: undefined;
    Signup: undefined;
    Login: undefined
};

export type StackHomeProductList = {
    Home: undefined;
    ProductDetails: undefined;
    Checkout: undefined;
    Notifications: undefined;
    Address: undefined;
    Cart: undefined;
    Review: undefined;
};

export type StackCartCheckoutPurchaseList = {
    Cart: undefined;
    Notifications: undefined;
    Address: undefined;
    AddressScreen: undefined;
    Checkout: undefined;
    Purchase: undefined;
};

// Drawer Navigator types
export type DrawerParamList = {
    Home: undefined;
    Settings: undefined;
    DrawerIcon: undefined
};

// Bottom Tab Navigator types
export type BottomTabParamList = {
    Home: undefined;
    Notifications: undefined;
    CartCheckoutPurchase: undefined;
    BrandIcon: undefined;
    Settings: undefined
};

// Top Tab Navigator types
export type TopTabParamList = {
    TopTab1: undefined;
    TopTab2: undefined;
};

// Stack Navigation prop
export type StackNavProp = StackNavigationProp<StackParamList>;

// Drawer Navigation prop
export type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;

// Bottom Tab Navigation prop
export type BottomTabNavProp = BottomTabNavigationProp<BottomTabParamList>;

// Top Tab Navigation prop
export type TopTabNavProp = MaterialTopTabNavigationProp<TopTabParamList>;
