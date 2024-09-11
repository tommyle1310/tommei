// src/components/AuthWrapper.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView, ViewStyle, TextStyle, StyleProp, Pressable, ImageProps, ScrollView } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import TText from '../../components/theme/TText';
import TInput from '../../components/theme/TInput';
import { Button, Divider, Icon, IconElement, IconProps, Spinner, useTheme as useThemeApp } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation/types';


// Define the props for the AuthWrapper component
interface AuthWrapperProps {
    style?: StyleProp<ViewStyle>;
    title?: string;
    btn: { title: string, onTap: () => void }
    subTitle: string;
    smallText: { desc: string, title: string, onTap: () => void }
    navigation: StackNavigationProp<StackParamList, 'Login' | 'Signup'>;
    bottomText: { desc: string, title: string, onTap: () => void }
}

const Facebook = (props: IconProps): IconElement => (
    <Icon
        {...props}
        name='facebook'
    />
);
const Google = (props: IconProps): IconElement => (
    <Icon
        {...props}
        name='google'
    />
);

const LoadingIndicator = (props: ImageProps): React.ReactElement => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small' />
    </View>
);




// AuthWrapper component
const AuthWrapper: React.FC<AuthWrapperProps> = ({ subTitle, style, title, smallText, bottomText, navigation, btn }) => {
    const { themeStyle, theme } = useTheme(); // Use the custom hook
    const themeApp = useThemeApp()

    const Content = () => (
        <SafeAreaView style={[styles.container, themeStyle]}>

            <View style={[styles.content, style]}>
                <View style={styles.titleContainer}>
                    <TText style={styles.mainTitle} title={title} />
                    <TText style={styles.subTitle} title={subTitle} />
                </View>
                <View style={styles.formControl}>
                    <TInput label='Email' placeholder="Enter your email address" />
                </View>
                <View style={styles.formControl}>
                    <TInput label='Password' placeholder="Enter your password" />
                </View>
                {
                    title === 'Create an account' &&
                    <View style={styles.formControl}>
                        <TInput label='Password' placeholder="Enter your password" />
                    </View>
                }
                <View style={styles.smallText}>
                    <TText title={smallText.desc} />
                    <Pressable ><TText style={styles.underlineText} title={smallText.title} /></Pressable>
                </View>
                <Button onPress={() => { btn.onTap() }} >{btn.title}</Button>

                <Divider style={{ backgroundColor: themeApp['color-info-default'], marginVertical: 20 }} />
                <View style={styles.otherLogin}>
                    <Button accessoryLeft={Google} onPress={() => { }} style={{ ...themeStyle }} appearance='outline' status={theme === 'light' ? 'primary' : 'warning'}>Login with Google</Button>
                    <Button accessoryLeft={Facebook} onPress={() => { }} style={{ backgroundColor: '#1877F2' }} >Login with Facebook</Button>
                </View>
                <View style={styles.bottomTextContainer}>
                    <TText title={bottomText.desc} />
                    <Pressable onPress={() => bottomText.onTap()} style={{}} ><TText style={{ ...styles.underlineText }} title={bottomText.title} /></Pressable>
                </View>
            </View>
        </SafeAreaView>
    )


    return (
        <>
            {title === 'Create an account' ?
                <ScrollView>
                    <Content />
                </ScrollView>
                :
                <Content />
            }
        </>

    );
};

// Define default styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        padding: 20,
        flex: 1,
        // backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
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
    formControl: {

    },
    smallText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6
    },
    underlineText: {
        textDecorationLine: 'underline'
    },
    otherLogin: {
        flex: 1, gap: 20
    },
    indicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomTextContainer: {
        flexDirection: 'row', gap: 6, alignSelf: 'center'
    }
});

export default AuthWrapper;
