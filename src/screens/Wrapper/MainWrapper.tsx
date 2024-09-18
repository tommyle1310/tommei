import React from 'react';
import { View, StyleSheet, SafeAreaView, ViewStyle, TextStyle, StyleProp, Text, ScrollView } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

interface MainWrapperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children, style, title, titleStyle }) => {
    const { themeStyle } = useTheme();

    return (
        <ScrollView style={[styles.container, themeStyle]}>
            {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            <View style={[styles.content, style]}>
                {children}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 48,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1, // Make sure content can fill remaining space
    },
});

export default MainWrapper;
