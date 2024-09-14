import React from 'react';
import { View, StyleSheet, SafeAreaView, ViewStyle, TextStyle, StyleProp, Text, ScrollView } from 'react-native';
import { ThemeContext } from '../../../theme-context'; // Adjust path as needed
import { useTheme } from '../../hooks/useTheme';

// Define the props for the MainWrapper component
interface MainWrapperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
}

// MainWrapper component
const MainWrapper: React.FC<MainWrapperProps> = ({ children, style, title, titleStyle }) => {
    // Get the theme from the context
    const { themeStyle } = useTheme(); // Use the custom hook

    // Define dynamic styles based on the theme
    const containerStyle = {
        ...styles.container
    };

    return (
        <ScrollView>

            <SafeAreaView style={[containerStyle, themeStyle]}>
                {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
                <View style={[styles.content, style]}>
                    {children}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

// Define default styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
        backgroundColor: '#f5f5f5', // Default background color for title
    },
    content: {
        flex: 1,
    },
});

export default MainWrapper;
