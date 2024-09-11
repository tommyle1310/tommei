// src/screens/Auth/Login.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageProps } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthWrapper from '../Wrapper/AuthWrapper';
import { useTheme } from '../../hooks/useTheme';
import TText from '../../components/theme/TText';
import TInput from '../../components/theme/TInput';
import { Button, Divider, Icon, IconElement, IconProps, Spinner, useTheme as useThemeApp } from '@ui-kitten/components';

type Props = StackScreenProps<StackParamList, 'Login'>;





const Login: React.FC<Props> = ({ navigation }) => {
    const themeApp = useThemeApp()
    const handleLogin = () => {
        // Navigate to the BottomTabs screen
        navigation.navigate('BottomTabs');
    };
    const handleGoToSignUp = () => {
        // Navigate to the BottomTabs screen
        navigation.navigate('Signup');
    };

    return (
        <AuthWrapper btn={{ title: 'Log In', onTap: handleLogin }} smallText={{ desc: 'Forgot your password?', title: 'Reset your password', onTap: () => { } }} navigation={navigation} bottomText={{ desc: "Don't have an account?", title: "Join", onTap: handleGoToSignUp }} title='Login to your account' subTitle="It's great to see you again" />
    );
};

const styles = StyleSheet.create({

})


export default Login;
