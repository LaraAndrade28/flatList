import { View, StyleSheet, FlatList, Text, Image, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

import CategoriasDosFilmes from "../componentes/CategoriasDosFilmes";
import renderCategoria from "../componentes/CardCategorias";

const categorias = CategoriasDosFilmes();


export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("./")}
          style={styles.logo}
        />

        <Ionicons
          name="person-circle-outline"
          size={36}
          color="white"
        />
      </View>

      {/* Barra de pesquisa */}
      <View style={styles.search}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
        />

        <TextInput
          placeholder="Pesquisar filmes..."
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoria}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#07010f",
    paddingTop: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  logo: {
    width: 140,
    height: 45,
    resizeMode: "contain",
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1020",
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 48,
  },
  input: {
    flex: 1,
    color: "#FFF",
    marginLeft: 10,
    fontSize: 16,
  }
})