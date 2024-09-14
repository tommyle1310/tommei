import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Icon, Layout } from '@ui-kitten/components'
import TText from '../theme/TText'
import { commonStyle } from '../../utils/styles/commonStyles'
import { useTheme } from '../../hooks/useTheme'
import { ListProducts } from '../../types/products/listProducts'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackHomeProductList } from '../../navigation/types'


const ProductList = ({ listProducts, navigation }: { listProducts: ListProducts[], navigation: StackNavigationProp<StackHomeProductList, 'Home' | 'ProductDetails'>; }) => {
    const { handleColor } = useTheme()

    return (
        <View style={{ width: '100%', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
            {listProducts.map((item) => (
                <Pressable onPress={() => navigation.navigate('ProductDetails')} key={item.id} style={{ width: '48%', gap: 10 }}>
                    <Layout level='2' style={{ width: '100%', aspectRatio: '3/4', borderRadius: 8, position: 'relative' }}>
                        <Pressable style={{ ...commonStyle.cc, width: 32, position: 'absolute', right: 10, top: 10, borderColor: 'green', borderWidth: 1, borderRadius: 8, aspectRatio: '1/1' }}>
                            <Icon name='heart-outline' style={[{ fontWeight: 400, aspectRatio: '1/1', width: 20 }]} fill='green' />
                        </Pressable>
                    </Layout>
                    <View>
                        <TText style={{ fontSize: 16, fontWeight: 700 }} title={item.name} />
                        <View style={{ flexDirection: 'row', gap: 10, ...commonStyle.ic }}>
                            <TText style={{ fontSize: 13, textDecorationLine: 'line-through', fontWeight: 400, color: handleColor('color-basic-500') }} title={`$${item.price}`} />
                            <TText style={{ fontSize: 10, fontWeight: 400, color: handleColor('color-danger-default') }} title={'$100'} />
                        </View>
                    </View>
                </Pressable>
            ))}

        </View>
    )
}

export default ProductList