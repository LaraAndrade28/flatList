import{View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Button} from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import CategoriasDosFilmes from '../CategoriasDosFilmes';

type Filme = {
    id: string;
    titulo: string;
    imagem: string;
    avaliacao?: string | number;
    ano?: string | number;
    duracao?: string;
    sinopse?: string;
    genero1?: string;
    genero2?: string;
    genero3?: string;
};

export default function FilmeScreen() { 
    const { id } = useLocalSearchParams();
    console.log('ID do filme:', id); // Adicione este log para verificar o valor de id

   const categorias = CategoriasDosFilmes();
    const filmeEncontrado = categorias
    .flatMap((categoria) => categoria.filmes)
     .find((filme) => filme.id === id) as Filme | undefined;

   console.log('Filme encontrado:', filmeEncontrado); // Adicione este log para verificar o filme encontrado 
    return (
        <ScrollView style={styles.PaiDeTodos}>
            <View style={styles.Header}>
                <Text style={styles.Titulo}>{filmeEncontrado?.titulo}</Text>
                 <View style={styles.Poster}>
                    <Image
                     source={{ uri: filmeEncontrado?.imagem }}
                     style={styles.card}
                    />
                </View>
                <View style={styles.AvaliacaoBox}>
                    <Text style={styles.Avaliacao}>
                     ⭐ {filmeEncontrado?.avaliacao}
                     </Text>
                </View>
                <Text style={styles.Info}>
                    {filmeEncontrado?.ano}      {filmeEncontrado?.duracao}
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
                {filmeEncontrado?.sinopse}
                </Text>
                 <View style={styles.Generos}>
                    <View style={styles.Tag}>
                        <Text style={styles.TextoTag}>
                            {filmeEncontrado?.genero1}
                        </Text>
                    </View>

                    <View style={styles.Tag}>
                        <Text style={styles.TextoTag}>
                            {filmeEncontrado?.genero2}
                        </Text>
                    </View>

                    <View style={styles.Tag}>
                        <Text style={styles.TextoTag}>
                            {filmeEncontrado?.genero3}
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