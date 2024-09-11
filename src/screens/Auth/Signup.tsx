// src/screens/Auth/Login.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthWrapper from '../Wrapper/AuthWrapper';

type Props = StackScreenProps<StackParamList, 'Signup'>;

const Login: React.FC<Props> = ({ navigation }) => {
    const handleGoToLogin = () => {
        // Navigate to the BottomTabs screen
        navigation.navigate('Login');
    };
    const handleSignup = () => {
        // Navigate to the BottomTabs screen
        navigation.navigate('Login');
    };

    return (
        <AuthWrapper>

            <View>
                <Text>Sign up Screen</Text>
                <Button title="Sign up" onPress={handleSignup} />
                <Button title="Go to login" onPress={handleGoToLogin} />
            </View>
        </AuthWrapper>
    );
};

export default Login;
