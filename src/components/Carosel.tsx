import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Text, ViewPager } from '@ui-kitten/components';

const Carosel = (): React.ReactElement => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const shouldLoadComponent = (index): boolean => index === selectedIndex;

    return (
        <ViewPager
            selectedIndex={selectedIndex}
            shouldLoadComponent={shouldLoadComponent}
            onSelect={index => setSelectedIndex(index)}
        >
            <Layout

                level='2'
                style={styles.tab}
            >
                <View style={styles.left}>
                    <Text category='h5'>
                        40-50% OFF
                    </Text>
                    <Text category='p1'>
                        Now in (product)
                    </Text>
                    <Text category='p1'>
                        All colors
                    </Text>
                    <Button accessoryRight={<Icon name='arrow-forward-outline' />} appearance='outline' status='control'>Shop Now</Button>

                </View>
            </Layout>
            <Layout
                level='2'
                style={styles.tab}
            >
                <Text category='h5'>
                    Tab 2
                </Text>
            </Layout>
        </ViewPager>
    );
};

const styles = StyleSheet.create({
    tab: {
        height: 192,
        borderRadius: 12,
        padding: 20,
        gap: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#389B26'
    },
    left: {
        gap: 8
    }
});


export default Carosel