// src/screens/Auth/Login.tsx
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageProps } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthWrapper from '../Wrapper/AuthWrapper';
import { useTheme } from '../../hooks/useTheme';
import TText from '../../components/theme/TText';
import TInput from '../../components/theme/TInput';
import { Button, Divider, Icon, IconElement, IconProps, Spinner } from '@ui-kitten/components';
import { validateLogin } from '../../utils/functions/auth';
import { AuthResponse } from '../../types/authResponse';

type Props = StackScreenProps<StackParamList, 'Login'>;





const Login: React.FC<Props> = ({ navigation }) => {
    const initialResponse = { EC: 0, EM: '' }
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [emailError, setEmailError] = useState<string | undefined>();
    const [passwordError, setPasswordError] = useState<string | undefined>();
    const [fullNameError, setFullNameError] = useState<string | undefined>();

    const handleLogin = () => {
        // Navigate to the BottomTabs screen
        const response = validateLogin({ email, password })
        const { EC, EM } = response
        switch (EC) {
            case 0:
                setPasswordError(initialResponse.EM);
                setEmailError(initialResponse.EM);
                setFullNameError(initialResponse.EM);
                setEmail('')
                setPassword('')
                setFullName('')
                navigation.navigate('BottomTabs');
                return
            case 11:
                setEmailError(EM);
                return;
            case 12:
                setEmailError(EM);
                return;
            case 13:
                setEmailError(initialResponse.EM)
                setPasswordError(EM);
                return;
            default:
                return
        }


    };
    const handleGoToSignUp = () => {
        setPasswordError(initialResponse.EM);
        setEmailError(initialResponse.EM);
        setFullNameError(initialResponse.EM);
        setEmail('')
        setPassword('')
        setFullName('')
        // Navigate to the BottomTabs screen
        navigation.navigate('Signup');
    };

    const handleEmailChange = useCallback((text: string) => {
        setEmail(text);
    }, []);

    const handlePasswordChange = useCallback((text: string) => {
        setPassword(text);
    }, []);

    const handleFullNameChange = useCallback((text: string) => {
        setFullName(text);
    }, []);

    return (

        <AuthWrapper
            emailError={emailError}
            passwordError={passwordError}
            fullNameError={fullNameError}
            subTitle="It's great to see you again"
            btn={{ title: 'Log In', onTap: handleLogin }}
            navigation={navigation}
            smallText={{ desc: 'Forgot your password ', title: 'Reset my password', onTap: () => { } }}
            title="Login to your account"
            bottomText={{ desc: "Don't have an account?", title: 'Sign Up', onTap: handleGoToSignUp }}
            email={email}
            setEmail={handleEmailChange}
            password={password}
            setPassword={handlePasswordChange}
            fullName={fullName}
            setFullName={handleFullNameChange}
        />
    );
};

const styles = StyleSheet.create({

})


export default Login;
