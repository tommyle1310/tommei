import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import TText from './theme/TText'
import { useTheme } from '../hooks/useTheme'

const HorizontalList = ({ selectedId }: { selectedId: string }) => {
    const { theme } = useTheme()
    return (
        <FlatList
            horizontal
            style={[{ padding: 3, maxHeight: 40, marginVertical: 10 },]}
            data={[
                { id: '1', title: 'First Item' },
                { id: '2', title: 'Second Item' },
                { id: '3', title: 'Third Item' },
                { id: '4', title: 'Fourth Item' },
                { id: '5', title: 'Fifth Item' },
                // Add more items as needed
            ]}
            renderItem={({ item }) => {
                if (item.id === selectedId) {
                    return <Pressable style={{
                        backgroundColor: theme === 'light' ? '#111' : '#fff',
                        borderWidth: 1,
                        marginRight: 5,
                        padding: 5,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    }}>
                        <TText title={item.title} style={{
                            fontSize: 16,
                            backgroundColor: 'transparent',
                            color: theme === 'light' ? '#fff' : '#111',
                        }} />
                    </Pressable>
                }
                return (
                    <Pressable style={{
                        backgroundColor: theme === 'dark' ? '#111' : '#fff',

                        borderWidth: 1,
                        marginRight: 5,
                        padding: 5,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    }}>
                        <TText title={item.title} style={{
                            fontSize: 16,
                            color: theme === 'dark' ? '#fff' : '#111',

                            backgroundColor: 'transparent',

                        }} />
                    </Pressable>)
            }
            }
            keyExtractor={item => item.id}
        />
    )
}

export default HorizontalList