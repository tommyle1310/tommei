import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import MainWrapper from './Wrapper/MainWrapper';
import TText from '../components/theme/TText';
import { commonStyle } from '../utils/styles/commonStyles';
import { Button, Icon } from '@ui-kitten/components';
import { useTheme } from '../hooks/useTheme';
import CartItem from '../components/Cart/CartItem';
import TInput from '../components/theme/TInput';
import TButton from '../components/theme/TButton';
import TPrimaryBtn from '../components/theme/TPrimaryBtn';
import { StackScreenProps } from '@react-navigation/stack';
import { StackCartCheckoutPurchaseList } from '../navigation/types';
import TitleScreen from '../components/TitleScreen';

type Props = StackScreenProps<StackCartCheckoutPurchaseList, 'Cart'>;


const CartScreen: React.FC<Props> = ({ navigation }) => {
    const { handleColor } = useTheme();
    const priceStyle = [styles.price, { color: handleColor('color-success-default') }]

    return (
        <ScrollView>
            <MainWrapper style={{ gap: 10 }}>
                <TitleScreen title='My Cart' navigation={navigation} iconRight={<Icon
                    style={commonStyle.icon}
                    fill={handleColor('color-primary-default')}
                    name='bell-outline'
                />}
                    onTapIconRight={() => navigation.navigate('Notifications')}
                />
                <View style={{ flexDirection: 'column', gap: 10 }}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </View>
                <View style={{ borderWidth: 1, borderColor: handleColor('color-basic-600'), padding: 10, borderRadius: 6, gap: 20 }}>
                    <TText title='Order Summary' style={[styles.price, { fontSize: 18 }]} />
                    <TInput label='Discount code / Promo code' placeholder='Code' onChangeText={() => { }} />
                    <TInput label='Your bonus card number' placeholder='Card Number' onChangeText={() => { }} />
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
                    <TPrimaryBtn title='Go to checkout' onTap={() => { navigation.navigate('Checkout') }} />
                </View>
            </MainWrapper>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    price: { fontWeight: 700, fontSize: 16 }
})

export default CartScreen;
