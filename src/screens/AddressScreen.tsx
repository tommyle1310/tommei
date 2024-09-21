import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { StackCartCheckoutPurchaseList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import TText from '../components/theme/TText';
import TitleScreen from '../components/TitleScreen';
import { useTheme } from '../hooks/useTheme';
import { commonStyle } from '../utils/styles/commonStyles';
import { Button, Card, Icon, Layout, Radio } from '@ui-kitten/components';
import { listAddresses } from '../utils/sampleData/listAddresses';

type Props = StackScreenProps<StackCartCheckoutPurchaseList, 'Address'>;

const AddressScreen: React.FC<Props> = ({ navigation }) => {
    const { handleColor, themeStyle, theme } = useTheme()
    const [selectedId, setSelectedId] = React.useState('2');

    return (
        <MainWrapper style={{ gap: 20 }}>
            <TitleScreen
                navigation={navigation}
                onTapIconLeft={() => navigation.pop()}
                onTapIconRight={() => navigation.navigate('Cart')}
                title='Address'
                iconLeft={<Icon fill={handleColor('color-basic-600')}
                    style={[commonStyle.icon]}
                    name='arrow-ios-back-outline' />}
                iconRight={<Icon fill={handleColor('color-basic-600')}
                    style={[commonStyle.icon]} name='bell-outline' />}
            />
            <TText title='Saved Addresses' style={commonStyle.h1} />
            <View style={{ gap: 10 }}>
                {listAddresses.map(item => (
                    <Pressable
                        onPress={() => setSelectedId(item.id)}
                        key={item.id} style={[commonStyle.ic, commonStyle.jb, { gap: 10, padding: 10, borderRadius: 8, borderWidth: 1, borderColor: handleColor('color-basic-600') }]}>
                        {/* <TText style={commonStyle.smallP} title={item.title} /> */}
                        <View style={{ flex: 1, }}>
                            <TText title={item.title} style={commonStyle.bgNone} />
                        </View>
                        <Radio
                            style={{}}
                            status={item.id === selectedId ? 'success' : 'basic'}
                            checked={item.id === selectedId ? true : false}
                            onChange={id => setSelectedId(item.id)}
                        >
                        </Radio>
                    </Pressable>
                ))}
                <Button style={{ marginVertical: 10 }} appearance='outline' status='control' accessoryLeft={<Icon style={[commonStyle.smallIcon]} fill={handleColor('color-control-default')} name='plus-outline' />}>Add New Address</Button>
            </View>
        </MainWrapper>
    )
}

export default AddressScreen