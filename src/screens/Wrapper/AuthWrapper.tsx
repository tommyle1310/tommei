// src/components/AuthWrapper.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView, ViewStyle, TextStyle, StyleProp, Text } from 'react-native';

// Define the props for the AuthWrapper component
interface AuthWrapperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
}

// AuthWrapper component
const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, style, title, titleStyle }) => {
    return (
        <SafeAreaView style={styles.container}>
            {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            <View style={[styles.content, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

// Define default styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        paddingBottom: 20,
        flex: 1,
        // backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
    },
});

export default AuthWrapper;
