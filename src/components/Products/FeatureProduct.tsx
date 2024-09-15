import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { commonStyle } from '../../utils/styles/commonStyles'
import { Icon, IconElement } from '@ui-kitten/components'
import TText from '../theme/TText'

const FeatureProduct = ({ title, subTitle, icon }: { title: string, subTitle: string, icon: IconElement }) => {
    return (
        <View style={{ gap: 5, alignItems: 'center', marginTop: 10, marginHorizontal: 'auto' }}>
            <View style={[commonStyle.cc, { width: 50, aspectRatio: '1/1', backgroundColor: '#ccc', borderRadius: 8 }]}>
                {icon}
            </View>
            <View style={{ alignItems: 'center' }}>
                <TText style={{ color: '#bbb' }} title={title} />
                <TText style={[styles.pBold]} title={subTitle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pBold: { fontSize: 14, fontWeight: 800 }
})
export default FeatureProduct