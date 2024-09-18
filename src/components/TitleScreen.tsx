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
    navigationIconLeft?: any;
    navigationIconRight?: any;
    title?: string
}

const TitleScreen: React.FC<TitleScreenProps> = ({ navigation, iconLeft, iconRight, title, navigationIconLeft, navigationIconRight }) => {
    const { handleColor } = useTheme();

    return (
        <View style={[commonStyle.jb, commonStyle.ic]}>
            {iconLeft &&
                <View style={{ width: '10%' }}>
                    <TButton
                        onPress={() => navigationIconLeft()}
                        icon={iconLeft}
                    />
                </View>
            }
            {title &&

                <TText title={title} style={commonStyle.h1} />
            }
            {iconRight &&

                <View style={{ width: '10%' }}>
                    <TButton
                        onPress={() => navigationIconRight()}
                        icon={iconRight}
                    />
                </View>
            }
        </View>
    );
}

export default TitleScreen;
