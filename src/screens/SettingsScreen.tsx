// src/screens/SettingsScreen.tsx
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList, StackParamList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import DrawerIcon from '../components/DrawerIcon';
import { useTheme } from '../hooks/useTheme';
import TText from '../components/theme/TText';
import ToggleTheme from '../components/ToggleThemeBtn';
import { StackScreenProps } from '@react-navigation/stack';

// Define the type of navigation prop for this screen
type Props = StackScreenProps<StackParamList, 'BottomTabs'>;

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const handleSignOut = () => {
        navigation.navigate('Login');
    };

    return (
        <MainWrapper>
            {/* <DrawerIcon navigation={navigation}>
            </DrawerIcon> */}

            <TText style={styles.text} title='Setting Screen' />
            <ToggleTheme />
            <Button title="Sign out" onPress={handleSignOut} />

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
