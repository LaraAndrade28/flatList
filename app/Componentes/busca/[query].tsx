import {Stack, useLocalSearchParams} from "expo-router";
import {StyleSheet, Text, View} from "react-native";

export default function Busca() {
    const { query } = useLocalSearchParams();

    console.log("Query recebido:", query);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: query,
                    headerStyle: {
                        backgroundColor: '#6e0505ff',
                    },
                    headerTintColor: '#ffffffff',
                }}
            />
            <Text style={styles.texto}>termo buscado: {query}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#fff',
        fontSize: 18,
    },
});