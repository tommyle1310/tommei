import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, Layout } from '@ui-kitten/components';

const CartQuantityProductBtnGroup = (): React.ReactElement => (
    <Layout
        style={styles.container}
        level='1'
    >


        <ButtonGroup
            style={styles.buttonGroup}
            status='primary'
        >
            <Button>
                L
            </Button>
            <Button>
                R
            </Button>
        </ButtonGroup>

    </Layout>
)

export default CartQuantityProductBtnGroup

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
