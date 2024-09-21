import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainWrapper from './Wrapper/MainWrapper'
import TText from '../components/theme/TText'
import { commonStyle } from '../utils/styles/commonStyles'
import TButton from '../components/theme/TButton'
import { StackScreenProps } from '@react-navigation/stack'
import { StackCartCheckoutPurchaseList } from '../navigation/types'
import { Button, Icon } from '@ui-kitten/components'
import { useTheme } from '../hooks/useTheme'
import TitleScreen from '../components/TitleScreen'
import HorizontalList from '../components/HorizontalList'
import TPrimaryBtn from '../components/theme/TPrimaryBtn'
import TInput from '../components/theme/TInput'

type Props = StackScreenProps<StackCartCheckoutPurchaseList, 'Checkout'>;


const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
    const { handleColor, themeStyle, theme } = useTheme()
    const priceStyle = [styles.price, { color: handleColor('color-success-default') }]
    const titleSection = [styles.price, { fontSize: 18 }]

    return (
        <MainWrapper>
            <View style={{ gap: 10, }}>
                <TitleScreen
                    navigation={navigation}
                    onTapIconLeft={() => navigation.pop()}
                    onTapIconRight={() => navigation.navigate('Cart')}
                    title='Checkout'
                    iconLeft={<Icon fill={handleColor('color-basic-600')}
                        style={[commonStyle.icon]}
                        name='arrow-ios-back-outline' />}
                    iconRight={<Icon fill={handleColor('color-basic-600')}
                        style={[commonStyle.icon]} name='bell-outline' />}
                />
                <View style={{ borderTopWidth: 1, paddingVertical: 10, borderColor: handleColor('color-basic-600') }}>
                    <View style={[commonStyle.jb, commonStyle.ic]}>
                        <TText style={titleSection} title='Delivery Address' />
                        <TButton textStyle={{ color: handleColor('color-warning-default'), textDecorationLine: 'underline' }} title='Change' onPress={() => { navigation.navigate('Address') }}></TButton>
                    </View>
                    <View style={[commonStyle.ic, { gap: 10 }]}>
                        <Icon style={commonStyle.smallIcon} name='pin-outline' fill={handleColor('color-basic-600')} />
                        <View style={{ gap: 4 }}>
                            <TText style={commonStyle.h4} title={'Home'} />
                            <TText style={commonStyle.smallP} title={'925S Chugach ST #APT 10, Alaska 99645'} />
                        </View>
                    </View>
                </View>
                <View style={{ borderTopWidth: 1, paddingVertical: 10, borderColor: handleColor('color-basic-600') }}>
                    <View style={[commonStyle.jb, commonStyle.ic]}>
                        <TText style={titleSection} title='Payment Method' />
                    </View>
                    <View style={[commonStyle.ic, { gap: 10 }]}>
                        <View style={{ gap: 4, flex: 1 }}>
                            <HorizontalList type='categories' data={[{ id: '1', title: 'Card' }, { id: '2', title: 'Cash' }]} selectedId='1' />
                            <View style={{ borderWidth: 1, ...commonStyle.jb, ...commonStyle.ic, borderColor: handleColor('color-basic-600'), borderRadius: 8, padding: 10 }}>
                                <View style={[commonStyle.ic, { gap: 4, }]}>
                                    <TText title='VISA' />
                                    <TText title='**** **** **** 2512' />
                                </View>
                                <Icon name='edit-outline' style={commonStyle.icon} fill={handleColor('color-basic-600')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ borderTopWidth: 1, borderColor: handleColor('color-basic-600'), padding: 10, borderRadius: 6, gap: 20 }}>
                    <TText title='Order Summary' style={titleSection} />
                    <View style={{ gap: 8 }}>
                        <View style={[commonStyle.jb, commonStyle.ic]}>
                            <TText style={{ fontSize: 16, fontWeight: 700 }} title={'Sub Total'} />
                            <TText style={styles.price} title={'$2347'} />
                        </View>
                        <View style={[commonStyle.jb, commonStyle.ic]}>
                            <TText title={'Estimated Tax'} />
                            <TText style={styles.price} title={'$50'} />
                        </View>
                        <View style={[commonStyle.jb, commonStyle.ic]}>
                            <TText title={'Estimated shipping & handling'} />
                            <TText style={styles.price} title={'$29'} />
                        </View>
                        <View style={[commonStyle.jb, commonStyle.ic]}>
                            <TText style={{ fontSize: 16, fontWeight: 700 }} title={'Total'} />
                            <TText style={priceStyle} title={'$2347'} />
                        </View>
                    </View>
                    <View style={[commonStyle.ic, { gap: 4 }]}>
                        <TInput style={{ flex: 1 }} placeholder='Enter promo code' onChangeText={() => { }} />
                        <TPrimaryBtn title='Add' onTap={() => { }} />
                    </View>

                    <TPrimaryBtn title='Place Order' onTap={() => { navigation.navigate('Checkout') }} />
                </View>
            </View>
        </MainWrapper >
    )
}


const styles = StyleSheet.create({
    price: { fontWeight: 700, fontSize: 16 }
})


export default CheckoutScreen