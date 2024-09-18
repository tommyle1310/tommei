import { View, Text } from 'react-native'
import React from 'react'
import MainWrapper from './Wrapper/MainWrapper'
import TText from '../components/theme/TText'
import { commonStyle } from '../utils/styles/commonStyles'
import TButton from '../components/theme/TButton'
import { StackScreenProps } from '@react-navigation/stack'
import { StackCartCheckoutPurchaseList } from '../navigation/types'
import { Icon } from '@ui-kitten/components'
import { useTheme } from '../hooks/useTheme'
import TitleScreen from '../components/TitleScreen'

type Props = StackScreenProps<StackCartCheckoutPurchaseList, 'Checkout'>;


const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
    const { handleColor, themeStyle, theme } = useTheme()

    return (
        <MainWrapper>
            <View style={{ gap: 10 }}>
                <TitleScreen navigation={navigation} navigationIconLeft={() => navigation.navigate('Cart')} navigationIconRight={() => navigation.navigate('Cart')} title='Checkout' iconLeft={<Icon fill={handleColor('color-basic-500')} style={[commonStyle.icon]} name='arrow-ios-back-outline' />} iconRight={<Icon fill={handleColor('color-basic-500')} style={[commonStyle.icon]} name='shopping-bag-outline' />} />
            </View>
        </MainWrapper>
    )
}

export default CheckoutScreen