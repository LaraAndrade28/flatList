import { View, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoriasDosFilmes from "../componentes/CategoriasDosFilmes";
import renderCategoria from "../componentes/CardCategorias";
import InputBusca from "../componentes/inputBusca";


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

      {/* Search Input */}A
      <View style={styles.searchContainer}>
        <InputBusca />
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
  searchContainer: {
    marginBottom: 15,
  },
});