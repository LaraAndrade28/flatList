import{View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Button} from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function FilmeScreen() {
    return (
        <ScrollView style={styles.PaiDeTodos}>
            <View style={styles.Header}>
                <Text style={styles.Titulo}>Knives Out</Text>
                 <View style={styles.Poster}>
                    <Image
                     source={{ uri: "https://image.tmdb.org/t/p/original/5zMiji6nLQPW0N6rocXYVbQuJXo.jpg" }}
                     style={styles.card}
                    />
                </View>
                <View style={styles.AvaliacaoBox}>
                    <Text style={styles.Avaliacao}>
                     ⭐ 8.5/10
                     </Text>
                </View>
                <Text style={styles.Info}>
                    2019 • Mistério • 2h 10min
                </Text>
                <TouchableOpacity style={styles.Botao}>
                    <Text style={styles.BotaoTexto}>
                       ▶  Assistir
                    </Text>
                </TouchableOpacity>
                <Text style={styles.TituloSecao}>
                    SINOPSE
                </Text>
                <Text style={styles.Sinopse}>
                Em uma mansão isolada, o renomado escritor de mistério Harlan Thrombey é encontrado morto após sua festa de aniversário. O detetive Benoit Blanc é chamado para investigar o caso e rapidamente percebe que todos os membros da família têm motivos para querer a morte de Harlan. Com uma série de pistas falsas e segredos familiares sendo revelados, Blanc deve desvendar o mistério antes que o assassino escape impune.
                </Text>
                 <View style={styles.Generos}>
                    <View style={styles.Tag}>
                        <Text style={styles.TextoTag}>
                            Mistério
                        </Text>
                    </View>

                    <View style={styles.Tag}>
                        <Text style={styles.TextoTag}>
                            Crime
                        </Text>
                    </View>

                    <View style={styles.Tag}>
                        <Text style={styles.TextoTag}>
                            Comédia
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    PaiDeTodos: {
        flex: 1,
        padding: 9,
        backgroundColor: '#07010f'
    },
    Header: {
        backgroundColor: '#130814',
        padding: 12,
        marginBottom: 12,
        borderRadius: 15,
    },
    Titulo: {
        color: '#ffffffff',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 15,
    },
    Poster: {
        backgroundColor: 'rgb(75, 4, 4)',
        padding: 10,
        borderRadius: 12,
        height: 500,
        marginTop: 10,
        overflow: 'hidden',
    },
    Sinopse: {
        color: '#c7c1cc',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 10,
        padding: 10,
    },
    Avaliacao: {
        color: '#ffffffff',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 5,
        padding: 10,
    },
    AvaliacaoBox: {
        backgroundColor: '#130814',
        padding: 10,
        alignSelf: 'center',
    },
    Generos: {
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
        gap: 8,
        alignSelf: 'center',
    },
    Tag: {
        backgroundColor: '#29152f',
        padding: 20,
        borderRadius: 5,
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    TextoTag: {
        color: '#ffffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Info: {
        color: '#ffffffff',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 5,
    },  
    Botao: {
        backgroundColor: '#9b0808',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    BotaoTexto: {
        color: '#ffffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    TituloSecao: {
        color: '#ffffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        padding: 10,
        alignSelf: 'center',
    },
    card: {
      width: "100%",
      height: "100%",
      borderRadius: 10
    },
});