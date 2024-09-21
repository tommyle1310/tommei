import React from 'react'
import MainWrapper from './Wrapper/MainWrapper'
import TText from '../components/theme/TText'
import TitleScreen from '../components/TitleScreen'
import { StackHomeProductList } from '../navigation/types';
import { StackScreenProps } from '@react-navigation/stack';
import { Avatar, Card, Icon, Layout, ProgressBar } from '@ui-kitten/components';
import { commonStyle } from '../utils/styles/commonStyles';
import { useTheme } from '../hooks/useTheme';
import { ScrollView, Text, View } from 'react-native';
import TInput from '../components/theme/TInput';

type Props = StackScreenProps<StackHomeProductList, 'Review'>;

const StatsStar = ({ title, number, total }: { title: string, number: number, total: number }) => {
    return (
        <View style={[commonStyle.jb, commonStyle.ic, { gap: 10 }]}>
            <TText title={title} />
            <View style={[commonStyle.ic, { gap: 5 }]}>
                <View style={{ height: 2, width: 100 }}>
                    <ProgressBar status='warning' progress={number / total} />
                </View>
                <TText title={`${number >= 100 ? ` ${number}` : number >= 10 ? `    ${number}` : `     ${number}`} `} />
            </View>
        </View>
    )
}

const RatingStars = () => {
    const { handleColor, themeStyle, theme } = useTheme()

    return (
        <View style={[commonStyle.ic, { gap: 3 }]}>
            <Icon name='star' fill={handleColor('color-warning-600')} style={commonStyle.smallIcon} />
            <Icon name='star' fill={handleColor('color-warning-600')} style={commonStyle.smallIcon} />
            <Icon name='star' fill={handleColor('color-warning-600')} style={commonStyle.smallIcon} />
            <Icon name='star' fill={handleColor('color-warning-600')} style={commonStyle.smallIcon} />
            <Icon name='star' fill={handleColor('color-basic-600')} style={commonStyle.smallIcon} />
        </View>
    )
}

const CommentSection = () => {
    const { handleColor, themeStyle, theme } = useTheme()

    return (
        <Layout level='3' style={[commonStyle.jb, { gap: 10, padding: 10, borderRadius: 8 }]}>
            <Avatar
                size='giant'
                source={require('../../assets/icon.png')}
            />
            <View style={{ gap: 5 }}>
                <View style={[commonStyle.ic, { gap: 10 }]}>
                    <TText style={{ backgroundColor: 'transparent', fontWeight: 700 }} title='TOmmy le' />
                    <TText style={{ backgroundColor: 'transparent', fontSize: 13, color: handleColor('color-basic-600') }} title='24 January, 2202' />
                </View>
                <RatingStars />
                <View style={{
                    flex: 1,
                    width: '90%', // or adjust this value
                }}>
                    <TText style={{
                        backgroundColor: 'transparent',
                        flex: 1,
                        fontSize: 12, // adjust font size if needed
                    }}
                        title={`I was a bit nervous to be buying a secondhand from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical SIM tray anymore, but I couldn't have been easier!`}
                    />

                </View>
            </View>
        </Layout>
    )
}

const ReviewScreen: React.FC<Props> = ({ navigation }) => {
    const { handleColor, themeStyle, theme } = useTheme()

    return (
        <ScrollView style={{ flex: 1, ...themeStyle }}>

            <MainWrapper style={{ gap: 20, flex: 1 }}>
                <TitleScreen navigation={navigation} onTapIconLeft={() => navigation.pop()} iconLeft={<Icon name='arrow-ios-back-outline' fill={handleColor('color-basic-600')} style={commonStyle.icon} />} title='Reviews' iconRight={<Icon style={commonStyle.smallIcon} name='bell' />} />
                <Card status='basic'>
                    <Layout level='1' style={[commonStyle.ic, commonStyle.jb]}>
                        <View style={{ alignItems: 'center', gap: 6 }}>
                            <TText style={[{ backgroundColor: 'transparent', fontWeight: 700, fontSize: 30 }, commonStyle.ic, commonStyle.jb]} title={'4.8'} />
                            <TText style={[{ backgroundColor: 'transparent', color: handleColor('color-basic-600'), fontSize: 12 }, commonStyle.ic, commonStyle.jb]} title={'of 125 reviews'} />
                        </View>
                        <RatingStars />
                    </Layout>
                </Card>
                <View style={{ gap: 10 }}>
                    <StatsStar total={125} title='Excellent' number={100} />
                    <StatsStar total={125} title='Good' number={11} />
                    <StatsStar total={125} title='Average' number={3} />
                    <StatsStar total={125} title='Below average' number={8} />
                    <StatsStar total={125} title='Poor' number={1} />
                </View>
                <TInput onChangeText={() => { }} placeholder='Leave Comment...' />
                <View style={{ gap: 10, flex: 1 }}>
                    <CommentSection />
                    <CommentSection />
                    <CommentSection />
                    <CommentSection />
                    <CommentSection />
                </View>
            </MainWrapper>
        </ScrollView>

    )
}

export default ReviewScreen
