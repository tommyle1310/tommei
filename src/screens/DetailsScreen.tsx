import { View, Text, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';

type Props = StackScreenProps<StackParamList, 'BottomTabs'>;


const DetailsScreen: React.FC<Props> = ({ navigation }) => {
    const handleSignOut = () => {
        navigation.navigate('Login');
    };
    return (
        <MainWrapper>
            <Text>DetailsScreen</Text>
            <Button title="Sign out" onPress={handleSignOut} />
        </MainWrapper>
    )
}

export default DetailsScreen