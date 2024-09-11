import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../hooks/useTheme';

const TText = ({ title, style }: { title: string, style?: object }) => {
    const { themeStyle } = useTheme(); // Use the custom hook

    return (
        <Text style={[themeStyle, style]}>{title}</Text>
    )
}

export default TText