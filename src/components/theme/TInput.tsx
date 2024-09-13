// src/components/theme/TInput.tsx
import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Input, Text } from '@ui-kitten/components';

const TInput = ({ label, placeholder, value, onChangeText, isPassword = false, error }: {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText: (text: string) => void;
    isPassword?: boolean;
    error?: string;
}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

    const toggleSecureEntry = useCallback(() => {
        setSecureTextEntry(!secureTextEntry);
    }, [secureTextEntry]);

    const renderIcon = (props) => {
        if (!isPassword) return null;
        return (
            <TouchableWithoutFeedback onPress={toggleSecureEntry}>
                <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View>
            <Input
                status={error ? 'danger' : 'basic'}
                value={value}
                label={label}
                placeholder={placeholder}
                secureTextEntry={isPassword ? secureTextEntry : false}
                autoCapitalize='none'
                accessoryRight={isPassword ? renderIcon : undefined}
                onChangeText={(text) => onChangeText(text)}
            />
            {error && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ width: 20, height: 20 }} fill='#F96718' name='alert-circle' />
                    <Text status='danger' category='s2'>{error}</Text>
                </View>
            )}
        </View>
    );
};

export default React.memo(TInput);
