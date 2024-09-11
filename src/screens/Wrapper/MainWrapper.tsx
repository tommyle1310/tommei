// src/components/MainWrapper.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView, ViewStyle, TextStyle, StyleProp, Text } from 'react-native';

// Define the props for the MainWrapper component
interface MainWrapperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
}

// MainWrapper component
const MainWrapper: React.FC<MainWrapperProps> = ({ children, style, title, titleStyle }) => {
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
        paddingTop: 32,
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
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

export default MainWrapper;
