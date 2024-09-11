// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import DrawerIcon from '../components/DrawerIcon';

// Define the type of navigation prop for this screen
type Props = DrawerScreenProps<DrawerParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <MainWrapper>
            <DrawerIcon navigation={navigation}>
            </DrawerIcon>
            <Text style={styles.text}>Home Screen</Text>
        </MainWrapper>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;
