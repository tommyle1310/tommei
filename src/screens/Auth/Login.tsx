// src/screens/Auth/Login.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthWrapper from '../Wrapper/AuthWrapper';

type Props = StackScreenProps<StackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
    const handleLogin = () => {
        // Navigate to the BottomTabs screen
        navigation.navigate('BottomTabs');
    };
    const handleGoToSignUp = () => {
        // Navigate to the BottomTabs screen
        navigation.navigate('Signup');
    };

    return (
        <AuthWrapper>
            <View>
                <Text>Login Screen</Text>
                <Button title="log in" onPress={handleLogin} />
                <Button title="Go to sign up" onPress={handleGoToSignUp} />
            </View>
        </AuthWrapper>
    );
};

export default Login;
