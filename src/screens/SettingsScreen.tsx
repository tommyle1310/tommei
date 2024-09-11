// src/screens/SettingsScreen.tsx
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import DrawerIcon from '../components/DrawerIcon';
import { useTheme } from '../hooks/useTheme';
import TText from '../components/theme/TText';

// Define the type of navigation prop for this screen
type Props = DrawerScreenProps<DrawerParamList, 'Settings'>;

const SettingsScreen: React.FC<Props> = ({ navigation }) => {

    return (
        <MainWrapper>
            <DrawerIcon navigation={navigation}>
            </DrawerIcon>
            <TText style={styles.text} title='Setting Screen' />
        </MainWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SettingsScreen;
