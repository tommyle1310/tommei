import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import TText from './theme/TText';
import { useTheme } from '../hooks/useTheme';
import { typeHorizontalList } from '../types/products/listProducts';
import { ListColors } from '../types/colors/listColors';
import { listCategories } from '../types/categories/listCategories';
import { commonStyle } from '../utils/styles/commonStyles';

type HorizontalListProps = {
    selectedId: string;
    data: listCategories[] | ListColors[];
    type: typeHorizontalList;
};

const HorizontalList = ({ selectedId, data, type }: HorizontalListProps) => {
    const { theme, handleColor } = useTheme();

    // Type guards to differentiate between categories and colors
    const isCategory = (item: any): item is listCategories => 'title' in item;
    const isColorItem = (item: any): item is ListColors => 'color' in item;

    return (
        <FlatList
            horizontal
            style={{ padding: 3, marginVertical: 10, maxHeight: type === 'productExtraOptions' ? 64 : 40 }}
            data={data}
            renderItem={({ item }) => {
                if (type === 'categories') {
                    if (isCategory(item)) {
                        const backgroundColor = item.id === selectedId
                            ? theme === 'light'
                                ? '#111'
                                : '#fff'
                            : theme === 'dark'
                                ? '#111'
                                : '#fff';

                        const textColor = item.id === selectedId
                            ? theme === 'light'
                                ? '#fff'
                                : '#111'
                            : theme === 'dark'
                                ? '#fff'
                                : '#111';

                        return (
                            <Pressable style={{
                                backgroundColor,
                                borderWidth: 1,
                                marginRight: 5,
                                padding: 5,
                                borderColor: '#ccc',
                                borderRadius: 8,
                                ...commonStyle.ic
                            }}>
                                {item.icon}
                                <TText title={item.title} style={{
                                    fontSize: 16,
                                    color: textColor,
                                    backgroundColor: 'transparent',
                                }} />
                            </Pressable>
                        );
                    }
                } else if (type === 'colors') {
                    if (isColorItem(item)) {
                        if (selectedId === item.id) {
                            return <Pressable style={{
                                backgroundColor: item.color,
                                marginRight: 5,
                                aspectRatio: '1/1',
                                width: 30,
                                borderWidth: 2,
                                borderColor: '#ccc',
                                borderRadius: 9999,
                            }}>
                            </Pressable>
                        }
                        return (
                            <Pressable style={{
                                backgroundColor: item.color,
                                marginRight: 5,
                                aspectRatio: '1/1',
                                width: 30,
                                borderColor: '#ccc',
                                borderRadius: 9999,
                            }}>
                            </Pressable>
                        );
                    }
                }
                else if (type === 'productExtraOptions') {
                    return (
                        <Pressable style={{
                            marginRight: 5,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            flex: 1,
                            borderRadius: 8,
                            backgroundColor: selectedId === item.id ? handleColor('color-basic-400') : 'transparent',
                            padding: 10,
                        }}>
                            <TText title={item.title} style={{ backgroundColor: 'transparent', color: selectedId === item.id ? handleColor('color-text-400') : handleColor('color-basic-500'), }} />
                        </Pressable>
                    );
                }
                return null; // Handle unexpected cases
            }}
            keyExtractor={item => item.id}
        />
    );
};

export default HorizontalList;
