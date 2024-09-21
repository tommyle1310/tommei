import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabParamList, StackParamList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import { useTheme } from '../hooks/useTheme';
import TText from '../components/theme/TText';
import TitleScreen from '../components/TitleScreen';
import { Icon } from '@ui-kitten/components';
import { commonStyle } from '../utils/styles/commonStyles';
import { timeAgo } from '../utils/functions/time';
import { listNotifications } from '../utils/sampleData/listNotifications';
import { notificationTypes } from '../utils/constants';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<BottomTabParamList, 'Notifications'>;

const handleNotificationTag = (tag: string) => {
    switch (tag) {
        case notificationTypes.discount:
            return 'pricetags-outline';
        case notificationTypes.account:
            return 'person-outline';
        case notificationTypes.credit_card:
            return 'credit-card-outline';
        case notificationTypes.location:
            return 'pin-outline';
    }
}

const NotificationByDay = ({ timestamp, data }: { timestamp: number, data: listNotifications[] }) => {
    const { handleColor, themeStyle, theme } = useTheme()

    return (
        <View style={[{ borderTopWidth: 1, borderColor: handleColor('color-basic-600'), paddingVertical: 10, gap: 10 }]}>
            <TText style={commonStyle.h1} title={timeAgo(timestamp)} />
            <View >
                <View style={{ gap: 10 }}>
                    {data.map(item => (
                        <View style={[commonStyle.ic, { gap: 10 }]} key={item.id}>
                            <Icon style={commonStyle.smallIcon} fill={handleColor('color-control-default')} name={handleNotificationTag(item.tag)} />
                            <View style={{ gap: 4 }}>
                                <TText style={commonStyle.h4} title={item.title} />
                                <TText style={[commonStyle.smallP, { color: handleColor('color-basic-600') }]} title='Special promotion only valid today.' />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

const NotificationsScreen: React.FC<Props> = ({ navigation }) => {
    const { handleColor, themeStyle, theme } = useTheme()

    return (
        <MainWrapper>
            <TitleScreen
                navigation={navigation}
                onTapIconLeft={() => navigation.navigate('Home')}
                iconLeft={<Icon name='arrow-ios-back-outline'
                    fill={handleColor('color-basic-600')}
                    style={commonStyle.icon} />}
                title='Notifications'
            />
            <NotificationByDay data={listNotifications.slice(-3)} timestamp={new Date().getTime()} />
            <NotificationByDay data={listNotifications.slice(2)} timestamp={new Date(new Date().getTime() - 24 * 60 * 60 * 1000).getTime()} />
            <NotificationByDay data={listNotifications.slice(0)} timestamp={new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime()} />
            <NotificationByDay data={listNotifications} timestamp={new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).getTime()} />

        </MainWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default NotificationsScreen