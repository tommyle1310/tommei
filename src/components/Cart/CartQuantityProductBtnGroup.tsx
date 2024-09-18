import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Input, Layout } from '@ui-kitten/components';
import TText from '../theme/TText';

const CartQuantityProductBtnGroup = (): React.ReactElement => (
    <Layout
        style={styles.container}
        level='1'
    >


        <ButtonGroup
            style={styles.buttonGroup}
            status='primary'
            size='tiny'
        >
            <Button >
                -
            </Button>
            <TText title='1' style={{ paddingHorizontal: 4, paddingVertical: 4 }} />
            <Button >
                +
            </Button>
        </ButtonGroup>

    </Layout>
)

export default CartQuantityProductBtnGroup

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 10,
    },
    buttonGroup: {
        margin: 2,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        justifyContent: 'center',
        backgroundColor: '#3366FF',
    },
});
