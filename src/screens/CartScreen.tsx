import { View, Text, Pressable } from 'react-native'
import React from 'react'
import MainWrapper from './Wrapper/MainWrapper'
import TText from '../components/theme/TText'
import { commonStyle } from '../utils/styles/commonStyles'
import { Icon } from '@ui-kitten/components'
import { useTheme } from '../hooks/useTheme'
import CartItem from '../components/Cart/CartItem'

const CartScreen = () => {
    const { handleColor } = useTheme()
    return (
        <MainWrapper style={{ flex: 1, gap: 10 }}>
            <View style={[{ flex: 1, }, commonStyle.jb, commonStyle.ic]}>
                <TText style={commonStyle.headerTitle} title='My Cart' />
                <Icon
                    style={commonStyle.icon}
                    fill={handleColor('color-primary-default')}
                    name='bell-outline'
                />
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'column', gap: 10 }}>
                <CartItem />
                <CartItem />
                <CartItem />
            </View>

        </MainWrapper >
    )
}

export default CartScreen