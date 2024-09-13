// src/screens/Auth/AuthWrapper.tsx
import React, { useMemo } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Button, Divider, Icon } from '@ui-kitten/components';
import { useTheme } from '../../hooks/useTheme';
import TText from '../../components/theme/TText';
import TInput from '../../components/theme/TInput';
import TPrimaryBtn from '../../components/theme/TPrimaryBtn';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';
import { AuthResponse } from '../../types/authResponse';

interface AuthWrapperProps {
    error?: AuthResponse;
    title?: string;
    btn: { title: string, onTap: () => void };
    subTitle: string;
    smallText: { desc: string, title: string, onTap: () => void };
    navigation: StackNavigationProp<StackParamList, 'Login' | 'Signup'>;
    bottomText: { desc: string, title: string, onTap: () => void };
    email: string;
    setEmail: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    fullName: string;
    setFullName: (text: string) => void;
    emailError?: string;
    passwordError?: string;
    fullNameError?: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
    btn, title, subTitle, bottomText, email, setEmail, password, setPassword, fullName, setFullName,
    emailError, passwordError, fullNameError
}) => {
    const { themeStyle, theme } = useTheme();

    const Content = useMemo(() => (
        <View style={[styles.container, themeStyle, { flex: 1 }]}>
            <View style={[styles.content, themeStyle]}>
                <View style={styles.titleContainer}>
                    <TText style={styles.mainTitle} title={title} />
                    <TText style={styles.subTitle} title={subTitle} />
                </View>
                {btn.title === 'Sign Up' && (
                    <View style={styles.formControl}>
                        <TInput
                            value={fullName}
                            onChangeText={setFullName}
                            label="Full Name"
                            placeholder="Enter your full name"
                            error={fullNameError}
                        />
                    </View>
                )}
                <View style={styles.formControl}>
                    <TInput
                        value={email}
                        onChangeText={setEmail}
                        label="Email"
                        placeholder="Enter your email address"
                        error={emailError}
                    />
                </View>
                <View style={styles.formControl}>
                    <TInput
                        value={password}
                        onChangeText={setPassword}
                        label="Password"
                        isPassword
                        placeholder="Enter your password"
                        error={passwordError}
                    />
                </View>
                <TPrimaryBtn onTap={btn.onTap} title={btn.title} />
                <Divider style={{ backgroundColor: theme['color-info-default'], marginVertical: 20 }} />
                <View style={styles.otherLogin}>
                    <Button
                        accessoryLeft={(props) => <Icon {...props} name="google" />}
                        onPress={() => { }}
                        style={{ ...themeStyle }}
                        appearance="outline"
                        status={theme === 'light' ? 'primary' : 'warning'}
                    >
                        Login with Google
                    </Button>
                    <Button
                        accessoryLeft={(props) => <Icon {...props} name="facebook" />}
                        onPress={() => { }}
                        style={{ backgroundColor: '#1877F2' }}
                    >
                        Login with Facebook
                    </Button>
                </View>
                <View style={styles.bottomTextContainer}>
                    <TText title={bottomText.desc} />
                    <Pressable onPress={bottomText.onTap}>
                        <TText style={styles.underlineText} title={bottomText.title} />
                    </Pressable>
                </View>
            </View>
        </View>
    ), [fullName, email, password, themeStyle, btn, title, subTitle, bottomText, fullNameError, emailError, passwordError]);

    return (
        <View style={{ flex: 1 }}>
            {/* <ScrollView keyboardShouldPersistTaps="always"> */}
            {Content}
            {/* </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        padding: 20,
        flex: 1,
    },
    content: {
        flex: 1,
        gap: 24
    },
    titleContainer: {
    },
    mainTitle: {
        fontSize: 24,
    },
    subTitle: {
        fontSize: 12,
        color: '#ccc'
    },
    formControl: {},
    underlineText: {
        textDecorationLine: 'underline'
    },
    otherLogin: {
        flex: 1,
        gap: 20
    },
    bottomTextContainer: {
        flexDirection: 'row',
        gap: 6,
        alignSelf: 'center'
    }
});

export default React.memo(AuthWrapper);
