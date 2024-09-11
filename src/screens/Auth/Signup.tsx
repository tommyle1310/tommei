// src/screens/Auth/Login.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthWrapper from '../Wrapper/AuthWrapper';
import { useTheme } from '../../hooks/useTheme';
import TText from '../../components/theme/TText';

type Props = StackScreenProps<StackParamList, 'Signup'>;

const Login: React.FC<Props> = ({ navigation }) => {
    const handleGoToLogin = () => {
        navigation.navigate('Login');
    };
    const handleSignup = () => {
        navigation.navigate('Login');
    };

    return (
        <AuthWrapper subTitle="Let's create your account" btn={{ title: 'Sign Up', onTap: handleSignup }} navigation={navigation} smallText={{ desc: 'By signing up you agree to our ', title: 'Terms, Privacy Policy and Cookie Use', onTap: () => { } }} title='Create an account' bottomText={{ desc: 'Already have an account?', title: 'Log In', onTap: handleGoToLogin }} />
    );
};

export default Login;
