// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList, StackHomeProductList } from '../navigation/types';
import MainWrapper from './Wrapper/MainWrapper';
import DrawerIcon from '../components/DrawerIcon';
import { Button, Icon, Layout } from '@ui-kitten/components';
import TText from '../components/theme/TText';
import { commonStyle } from '../utils/styles/commonStyles';
import TInput from '../components/theme/TInput';
import TPrimaryBtn from '../components/theme/TPrimaryBtn';
import { useTheme } from '../hooks/useTheme';
import HorizontalList from '../components/HorizontalList';
import Carosel from '../components/Carosel';
import ListProducts from '../components/Products/ListProducts';
import { listProducts } from '../utils/sampleData/discover/listProducts';
import { StackScreenProps } from '@react-navigation/stack';
import { listCategories } from '../utils/sampleData/discover/listCategories';
import TButton from '../components/theme/TButton';

// Define the type of navigation prop for this screen
type Props = StackScreenProps<StackHomeProductList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { theme, handleColor } = useTheme()
    const [selectedTagId, setSelectedTagId] = useState('2')
    return (
        <MainWrapper style={{ paddingBottom: 100, }}>
            {/* <DrawerIcon navigation={navigation}>
            </DrawerIcon> */}


            {/* discover */}
            <View style={{ gap: 20, flexDirection: 'column', flex: 1, }}>
                <View style={[commonStyle.jb]}>
                    <TText title='Discover' style={{ ...commonStyle.headerTitle, fontWeight: 700 }} />
                    <TButton
                        icon={<Icon
                            style={commonStyle.icon}
                            fill={handleColor('color-primary-default')}
                            name='bell-outline'
                        />}
                        onPress={() => navigation.navigate('Notifications')}
                    />
                </View>

                <View style={[commonStyle.ic, { gap: 8 }]}>
                    <TInput icon={<Icon fill={(theme === 'light') ? handleColor('color-default-primary') : '#aaa'} name='search-outline' />} style={{ flex: 1 }} placeholder='Search for clothes...' onChangeText={() => { }} value={''} />
                    <TButton
                        style={theme === 'light' ? { backgroundColor: '#111', padding: 10, borderRadius: 5, ...commonStyle.cc } : { backgroundColor: '#fff', padding: 10, borderRadius: 5, ...commonStyle.cc }}
                        icon={<Icon name='options' fill={handleColor('color-basic-600')}
                            style={commonStyle.icon} />}
                        onPress={() => { }}
                    />
                </View>
                <HorizontalList type='categories' data={listCategories} selectedId={selectedTagId} />
                <View style={{ flex: 1, gap: 14 }}>
                    {/* all featured title */}
                    <View style={[commonStyle.jb, commonStyle.ic]}>
                        <TText title='All featured' style={commonStyle.h1} />
                        <View style={[commonStyle.ic, { gap: 10 }]}>
                            <Button status='basic' appearance='outline' accessoryRight={<Icon name='bell-outline' />} size='small'>Sort</Button>
                            <Button status='basic' appearance='outline' accessoryRight={<Icon name='funnel-outline' />} size='small'>Filter</Button>
                        </View>
                    </View>
                    {/* carosel */}
                    <Carosel />
                    {/* deal of the day */}
                    <View style={[commonStyle.ic, commonStyle.jb, { padding: 10, backgroundColor: handleColor('color-info-default'), borderRadius: 12 }]}>
                        <View style={{ gap: 10 }}>
                            <TText style={{ fontSize: 18, fontWeight: 700, backgroundColor: 'transparent' }} title='Deal of the day' />
                            <View style={[commonStyle.ic, { gap: 5 }]}>
                                <Icon fill='#fff' style={{ width: 20, height: 20 }} name='clock-outline' />
                                <TText style={{ fontSize: 12, backgroundColor: 'transparent' }} title='22h 59m 20s remaining' />
                            </View>
                        </View>

                        <Button accessoryRight={<Icon name='arrow-forward-outline' />} size='small' appearance='outline' status='control'>View All</Button>

                    </View>
                    <ListProducts listProducts={listProducts} navigation={navigation} />
                </View>
            </View>


        </MainWrapper >
    );
};

const styles = StyleSheet.create({

})


export default HomeScreen;
