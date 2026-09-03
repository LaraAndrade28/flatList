import { View, StyleSheet, FlatList, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

export default function renderCategoria({ item }:{item:any}) {
  return (
    <View style={styles.categoria}>

      <Text style={styles.tituloCategoria}>
        {item.titulo}
      </Text>

      <FlatList
        data={item.filmes}
        horizontal
        keyExtractor={(filme) => filme.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (

          <Pressable style={styles.card}>

            <Image
              source={{ uri: item.imagem }}
              style={styles.imagem}
              resizeMode="cover"
            />

            <Link href={"/filme"} style={styles.overlay}>
              <Text
                style={styles.nomeFilme}
                numberOfLines={2}
              >
                {item.titulo}
              </Text>
            </Link>

          </Pressable>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({


  categoria: {
    marginBottom: 30,
  },

  tituloCategoria: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },

  card: {
    width: 150,
    height: 220,
    marginLeft: 20,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 6,
    backgroundColor: "#130814",
  },

  imagem: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 8,
  },

  nomeFilme: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

});