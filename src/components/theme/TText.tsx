import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../hooks/useTheme';

const TText = ({ title, style, isBtnText }: { title: string, style?: object, isBtnText?: boolean }) => {
    const { themeStyle, theme } = useTheme(); // Use the custom hook

    return (
        <Text style={[themeStyle, style, isBtnText ?
            (
                theme === 'light' ?
                    { backgroundColor: 'transparent', color: '#fff' } :
                    { backgroundColor: 'transparent', color: '#111' }
            ) :
            null]}>
            {title}
        </Text>
    )
}

export default TText