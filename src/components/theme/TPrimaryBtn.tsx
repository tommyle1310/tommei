import { View, Text, Animated, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Button, IconElement } from '@ui-kitten/components'
import { useTheme } from '../../hooks/useTheme';
import TText from './TText';
import { commonStyle } from '../../utils/styles/commonStyles';

const TPrimaryBtn = ({ onTap, title, icon }: { onTap: () => void, title?: string, icon?: IconElement }) => {
    const { theme } = useTheme(); // Use the custom hook
    const [scale] = useState(new Animated.Value(1));

    const onPressIn = () => {
        Animated.spring(scale, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
        onTap()
    };

    return (
        <Pressable onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={theme === 'light' ? { backgroundColor: '#111', padding: 10, borderRadius: 5, ...commonStyle.cc } : { backgroundColor: '#fff', padding: 10, borderRadius: 5, ...commonStyle.cc }}
        >
            {icon}
            <TText isBtnText title={title} style={{ fontWeight: 700 }} />
        </Pressable>

    )
}

export default TPrimaryBtn