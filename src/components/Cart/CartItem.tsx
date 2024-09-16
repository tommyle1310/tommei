import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/styles/commonStyles'
import TText from '../theme/TText'
import { Icon } from '@ui-kitten/components'
import { useTheme } from '../../hooks/useTheme'
import CartQuantityProductBtnGroup from './CartQuantityProductBtnGroup'

const CartItem = () => {
    const { handleColor } = useTheme()
    return (
        <Pressable style={[{ borderWidth: 1, borderRadius: 8, padding: 10, gap: 8, borderColor: handleColor('color-basic-600') }, commonStyle.jb]}>
            <View style={{ aspectRatio: '1/1', width: 60, backgroundColor: 'green', alignSelf: 'center' }}></View>
            <View style={[{ flex: 1, gap: 5, }, commonStyle.jb, commonStyle.ic]}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                    {/* First Column */}
                    <View style={commonStyle.cjb}>
                        <TText title='Regular Fit Slogan' />
                        <TText title='Size L' />
                    </View>
                    {/* Second Column */}
                    <View style={[commonStyle.cjb, { alignItems: 'flex-end', gap: 20 }]}>
                        <View style={{}}>
                            <Icon name='trash-outline' fill={handleColor('color-danger-default')} style={commonStyle.smallIcon} />
                        </View>
                        <View style={{}}>
                            <CartQuantityProductBtnGroup />
                        </View>
                    </View>

                </View>
            </View>

        </Pressable >
    )
}

export default CartItem