import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@ui-kitten/components'
import { useTheme } from '../../hooks/useTheme';
import TText from './TText';

const TPrimaryBtn = ({ onTap, title }: { onTap: () => void, title: string }) => {
    const { theme } = useTheme(); // Use the custom hook

    return (
        <Button status='primary' appearance='filled' style={theme === 'light' ? null : { backgroundColor: '#fff', }} onPress={() => { onTap() }} ><TText isBtnText title={title} /></Button>

    )
}

export default TPrimaryBtn