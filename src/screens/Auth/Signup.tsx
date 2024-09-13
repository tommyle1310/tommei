import React, { useState, useCallback } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import AuthWrapper from '../Wrapper/AuthWrapper';
import { validateSignup } from '../../utils/functions/auth';

type Props = StackScreenProps<StackParamList, 'Signup'>;

const Signup: React.FC<Props> = ({ navigation }) => {
    const initialResponse = { EC: 0, EM: '' }
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [emailError, setEmailError] = useState<string | undefined>();
    const [passwordError, setPasswordError] = useState<string | undefined>();
    const [fullNameError, setFullNameError] = useState<string | undefined>();

    const handleGoToLogin = () => {
        setEmail('')
        setPassword('')
        setFullName('')
        setPasswordError(initialResponse.EM);
        setEmailError(initialResponse.EM);
        setFullNameError(initialResponse.EM);
        navigation.navigate('Login');
    };

    const handleSignup = () => {
        console.log('Signup Info:', 'email', email, 'password', password, 'fu;lname', fullName);
        const response = validateSignup({ password, fullName, email })
        const { EC, EM } = response
        switch (EC) {
            case 0:
                setPasswordError(initialResponse.EM);
                setEmailError(initialResponse.EM);
                setFullNameError(initialResponse.EM);
                setEmail('')
                setPassword('')
                setFullName('')
                navigation.navigate('Login');
                return
            case 1:
                setEmailError(EM);
                return;
            case 2:
                setEmailError(EM);
                return;
            case 3:
                setEmailError(initialResponse.EM)
                setFullNameError(EM)
                return;
            default:
                return
        }
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
            subTitle="Let's create your account"
            btn={{ title: 'Sign Up', onTap: handleSignup }}
            navigation={navigation}
            smallText={{ desc: 'By signing up you agree to our ', title: 'Terms, Privacy Policy and Cookie Use', onTap: () => { } }}
            title="Create an account"
            bottomText={{ desc: 'Already have an account?', title: 'Log In', onTap: handleGoToLogin }}
            email={email}
            setEmail={handleEmailChange}
            password={password}
            setPassword={handlePasswordChange}
            fullName={fullName}
            setFullName={handleFullNameChange}
        />
    );
};

export default Signup;
