import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainWrapper from '../Wrapper/MainWrapper'
import TText from '../../components/theme/TText'
import TButton from '../../components/theme/TButton'
import { Icon } from '@ui-kitten/components'
import { commonStyle } from '../../utils/styles/commonStyles'
import { StackScreenProps } from '@react-navigation/stack'
import { StackHomeProductList } from '../../navigation/types'
import Carosel from '../../components/Carosel'
import HorizontalList from '../../components/HorizontalList'
import { listCategories } from '../../utils/sampleData/discover/listCategories'
import { listColors } from '../../utils/sampleData/discover/listColors'
import { useTheme } from '../../hooks/useTheme'

type Props = StackScreenProps<StackHomeProductList, 'ProductDetails'>;


const ProductDetail: React.FC<Props> = ({ navigation }) => {
    const { handleColor } = useTheme()
    return (
        <MainWrapper style={[styles.container]}>
            <View style={{ gap: 10 }}>
                <View style={[commonStyle.jb, commonStyle.ic]}>
                    <View style={{ width: '10%' }}>
                        <TButton onPress={() => navigation.navigate('Home')} style={{}} icon={<Icon fill={handleColor('color-basic-400')} style={[commonStyle.icon]} name='arrow-ios-back-outline' />} />
                    </View>
                    <View style={{ width: '10%' }}>
                        <TButton onPress={() => navigation.navigate('Home')} style={{}} icon={<Icon fill={handleColor('color-basic-400')} style={[commonStyle.icon]} name='shopping-bag-outline' />} />
                    </View>
                </View>
                <Carosel />
                <View style={[commonStyle.ic, { gap: 4 }]}>
                    <TText style={{ fontWeight: 700, fontSize: 18 }} title='Size:' />
                    <TText style={{ fontWeight: 700, fontSize: 18 }} title='7UK' />
                </View>
                <View style={{ flexWrap: 'wrap', ...commonStyle.ic, gap: 10 }}>
                    <TText title='Select color:' />
                    <HorizontalList type='colors' data={listColors} selectedId='1' />
                </View>
            </View>
        </MainWrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green',
        height: 1000
    },

})

export default ProductDetail