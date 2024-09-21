import { View, PressableProps } from 'react-native';
import React from 'react';
import { commonStyle } from '../utils/styles/commonStyles';
import TButton from './theme/TButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackCartCheckoutPurchaseList, StackHomeProductList } from '../navigation/types';
import { Icon, IconElement } from '@ui-kitten/components';
import TText from './theme/TText';
import { useTheme } from '../hooks/useTheme';

// Combine the stack types for better type inference
type CombinedStackProps = StackNavigationProp<
    StackCartCheckoutPurchaseList & StackHomeProductList,
    keyof (StackCartCheckoutPurchaseList & StackHomeProductList)
>;

interface TitleScreenProps extends PressableProps {
    navigation: any;
    children?: React.ReactNode;
    iconRight?: IconElement;
    iconLeft?: IconElement;
    onTapIconLeft?: any;
    onTapIconRight?: any;
    title?: string
}

const TitleScreen: React.FC<TitleScreenProps> = ({ navigation, iconLeft, iconRight, title, onTapIconLeft, onTapIconRight }) => {
    const { handleColor } = useTheme();

    return (
        <View style={[iconRight ? commonStyle.jb : null, commonStyle.ic]}>
            {iconLeft &&
                <View style={{ width: '10%' }}>
                    <TButton
                        onPress={() => onTapIconLeft()}
                        icon={iconLeft}
                    />
                </View>
            }
            {title &&

                <TText title={title} style={[commonStyle.h1, { fontSize: 24 }]} />
            }
            {iconRight &&

                <View style={{ width: '10%' }}>
                    <TButton
                        onPress={() => onTapIconRight()}
                        icon={iconRight}
                    />
                </View>
            }
        </View>
    );
}

export default TitleScreen;
