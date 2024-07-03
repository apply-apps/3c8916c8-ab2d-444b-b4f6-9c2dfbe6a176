// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const Stack = createStackNavigator();
const tales = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Snow White' },
    { id: '3', title: 'Sleeping Beauty' },
    { id: '4', title: 'Beauty and the Beast' },
    { id: '5', title: 'The Little Mermaid' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.taleItem}
            onPress={() => navigation.navigate('Tale', { taleId: item.id, taleTitle: item.title })}>
            <Text style={styles.taleTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    list: {
        padding: 20,
    },
    taleItem: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    taleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    scrollView: {
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
});

const talesContent = {
    '1': 'Once upon a time, there was a young girl named Cinderella...',
    '2': 'Once upon a time, there was a princess named Snow White...',
    '3': 'Once upon a time, there was a princess who fell into a deep sleep...',
    '4': 'Once upon a time, there was a prince who fell in love with a beast...',
    '5': 'Once upon a time, there was a mermaid who lived under the sea...',
};

const TaleScreen = ({ route }) => {
    const { taleId, taleTitle } = route.params;
    const content = talesContent[taleId];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image source={{ uri: `https://picsum.photos/600/400?random=${taleId}` }} style={styles.image} />
                <Text style={styles.title}>{taleTitle}</Text>
                <Text style={styles.content}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fairy Tales' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Tale' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}