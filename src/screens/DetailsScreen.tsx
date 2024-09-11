import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import { useTheme } from '../hooks/useTheme';
import TText from '../components/theme/TText';

type Props = StackScreenProps<StackParamList, 'BottomTabs'>;


const DetailsScreen: React.FC<Props> = ({ navigation }) => {
    const handleSignOut = () => {
        navigation.navigate('Login');
    };

    return (
        <MainWrapper>
            <TText style={styles.text} title='Detail Screen' />
            <Button title="Sign out" onPress={handleSignOut} />
        </MainWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default DetailsScreen