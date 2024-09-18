import React, { useState } from 'react';
import { Pressable, StyleSheet, Animated } from 'react-native';
import { IconElement } from '@ui-kitten/components';
import TText from './TText';

const TButton = ({ icon, style, title, onPress, textStyle }: { icon?: IconElement, title?: string, style?: object, onPress?: () => void, textStyle?: object }) => {
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
        onPress()
    };

    return (
        <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={[styles.btnContainer, style]}
        >
            <Animated.View style={{ transform: [{ scale }] }}>
                {icon && icon}
                {title && <TText style={{ backgroundColor: 'transparent', ...textStyle }} title={title} />}
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TButton;
