import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MainWrapper from '../Wrapper/MainWrapper'
import TText from '../../components/theme/TText'
import TButton from '../../components/theme/TButton'
import { Button, Card, Icon, Modal } from '@ui-kitten/components'
import { commonStyle } from '../../utils/styles/commonStyles'
import { StackScreenProps } from '@react-navigation/stack'
import { StackHomeProductList } from '../../navigation/types'
import Carosel from '../../components/Carosel'
import HorizontalList from '../../components/HorizontalList'
import { listCategories } from '../../utils/sampleData/discover/listCategories'
import { listColors } from '../../utils/sampleData/discover/listColors'
import { useTheme } from '../../hooks/useTheme'
import { transform } from 'typescript'
import FeatureProduct from '../../components/Products/FeatureProduct'
import TPrimaryBtn from '../../components/theme/TPrimaryBtn'
import TitleScreen from '../../components/TitleScreen'

type Props = StackScreenProps<StackHomeProductList, 'ProductDetails'>;


const ProductDetail: React.FC<Props> = ({ navigation }) => {
    const { handleColor, themeStyle, theme } = useTheme()
    const [modalAddToCartSuccess, setModalAddToCartSuccess] = React.useState(false);


    return (
        <MainWrapper style={[styles.container]}>
            <View style={{ gap: 10 }}>
                <TitleScreen
                    navigation={navigation}
                    onTapIconLeft={() => navigation.navigate('Home')}
                    onTapIconRight={() => setModalAddToCartSuccess(true)}
                    title={'Product Details'} iconLeft={<Icon fill={handleColor('color-basic-500')}
                        style={[commonStyle.icon]} name='arrow-ios-back-outline' />}
                    iconRight={<Icon fill={handleColor('color-basic-500')}
                        style={[commonStyle.icon]} name='shopping-bag-outline' />}
                />

                <Carosel />
                <View style={[commonStyle.ic, { gap: 4 }]}>
                    <TText style={styles.h3} title='Size:' />
                    <TText style={styles.h3} title='7UK' />
                </View>
                <View style={{ gap: 10 }}>
                    <View style={styles.option}>
                        <TText title='Select color:' />
                        <HorizontalList type='colors' data={listColors} selectedId='1' />
                    </View>
                    <View style={styles.option}>
                        <TText title='Select color:' />
                        <HorizontalList type='productExtraOptions' data={[{ id: '1', title: 'S' }, { id: '2', title: 'M' }, { id: '3', title: 'L' }]} selectedId='1' />
                    </View>


                    <Button onPress={() => setModalAddToCartSuccess(true)} appearance='outline' status={theme === 'dark' ? 'control' : 'primary'}>Add to cart</Button>
                    <TPrimaryBtn onTap={() => { navigation.navigate('Checkout') }} title='Purchase' />


                    <TText style={styles.h3} title={'Product Details'} />
                    <View style={{}}>
                        <Text style={[styles.p, themeStyle]}>
                            <Text>
                                Perhaps the most iconic sneakers of all time, this original 'Chicago'? colorway is the cornerstate to any other sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of Air Jordan 1. This 2015 release saw the
                            </Text>
                            <Pressable>
                                <TText style={[styles.p, { color: handleColor('color-danger-default'), }]} title='...More' />
                            </Pressable>
                        </Text>
                    </View>
                    <View style={[commonStyle.ic, { gap: 5 }]}>
                        <Icon style={commonStyle.smallIcon} name='star' fill={handleColor('color-warning-default')} />
                        <TText style={{ fontWeight: 600, fontSize: 12, textDecorationLine: 'underline' }} title={`${4.0}/5`} />
                        <TText style={{ fontSize: 12, color: handleColor('color-basic-600') }} title={`(${45} reviews)`} />
                    </View>
                    <View style={{ flexWrap: 'wrap', ...commonStyle.ic, gap: 20 }}>
                        <FeatureProduct icon={<Icon style={commonStyle.icon} name='car-outline' fill='#888' />} subTitle='Free delivery' title='1-2 day' />
                        <FeatureProduct icon={<Icon style={commonStyle.icon} name='cube-outline' fill='#888' />} subTitle='Today' title='In Stock' />
                        <FeatureProduct title='Guaranteed' icon={<Icon style={commonStyle.icon} name='checkmark-circle' fill='#888' />} subTitle='1 year' />
                    </View>

                </View>

            </View>

            <Modal visible={modalAddToCartSuccess} style={{}}>
                <Card disabled={true} style={{ paddingTop: 10, position: 'relative', gap: 10 }}>
                    <TButton onPress={() => setModalAddToCartSuccess(false)} title={'x'} style={{ position: 'absolute', right: -2, top: -18 }} />
                    <TText title={'Add To Cart Successfully 😻'} style={{ backgroundColor: 'transparent', marginVertical: 10 }} />
                    <TPrimaryBtn title='Go to Cart' onTap={() => navigation.navigate('Cart')} />
                </Card>
            </Modal>
        </MainWrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green',
        height: 1000
    },
    option: { ...commonStyle.ic, flexWrap: 'wrap', gap: 10 },
    h3: { fontWeight: 700, fontSize: 18 },
    p: { fontSize: 12, lineHeight: 15 },
    pBold: { fontSize: 14, fontWeight: 800 }
})

export default ProductDetail