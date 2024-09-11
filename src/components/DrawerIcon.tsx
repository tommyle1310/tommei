// src/components/DrawerIcon.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, PressableProps, TextStyle, ViewStyle } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/types';

// Define the types for props
interface DrawerIconProps extends PressableProps {
    navigation: DrawerNavigationProp<DrawerParamList, 'Home' | 'Settings'>;
    children?: React.ReactNode; // Allow children to be passed in
}

const DrawerIcon: React.FC<DrawerIconProps> = ({ navigation, children }) => {
    return (
        <Pressable style={styles.circle} onPress={() => navigation.openDrawer()}>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    circle: {
        borderRadius: 9999,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
});

export default DrawerIcon;
