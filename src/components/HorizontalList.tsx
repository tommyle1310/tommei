import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import TText from './theme/TText';
import { useTheme } from '../hooks/useTheme';
import { typeHorizontalList } from '../types/products/listProducts';
import { ListColors } from '../types/colors/listColors';

type HorizontalListProps = {
    selectedId: string;
    data: listCategories[] | ListColors[];
    type: typeHorizontalList;
};

const HorizontalList = ({ selectedId, data, type }: HorizontalListProps) => {
    const { theme } = useTheme();

    // Type guards to differentiate between categories and colors
    const isCategory = (item: any): item is listCategories => 'title' in item;
    const isColorItem = (item: any): item is ListColors => 'color' in item;

    return (
        <FlatList
            horizontal
            style={{ padding: 3, maxHeight: 40, marginVertical: 10 }}
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
                                borderRadius: 9999,
                            }}>
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
                return null; // Handle unexpected cases
            }}
            keyExtractor={item => item.id}
        />
    );
};

export default HorizontalList;
