import { View, StyleSheet, FlatList, Text, Image, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#3636b1", imagem: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/oppenheimer-poster.jpg" },
      { id: "1b", titulo: "Duna 2", cor: "#87279b", imagem: "https://tse2.mm.bing.net/th/id/OIP.GURNPPODfsKPHH6kkKqBRAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem: "https://i.pinimg.com/originals/ad/34/ba/ad34bac0a881a18637ef84b24eb07acb.jpg" },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem: "https://tse2.mm.bing.net/th/id/OIP.nJRdTXTLjs4qOs0BAF5-RQHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem: "https://tse3.mm.bing.net/th/id/OIP.Vooz-PPSDh6-UlrTuJVHQwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem: "https://tse1.mm.bing.net/th/id/OIP.WI9Q2nABesAOwW2_IiDqBAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem: "https://cdn.ome.lt/images/movie/954/poster/pt.webp" },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", imagem: "https://www.picclickimg.com/nU8AAOSwJ1xkrUA9/Top-Gun-Maverick-Official-IMAX-Movie-Poster.webp" },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", imagem: "https://tse4.mm.bing.net/th/id/OIP.y5gnuiQQGjPZxOt2sg2dIQHaLI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem: "https://bananaroad.com/cdn/shop/products/pst2632_Superbad_Movie_Poster.jpg?v=1609189753" },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", imagem: "https://tse4.mm.bing.net/th/id/OIP.hlOYA2OweZrkg1Xi4J7SUwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem: "https://image.tmdb.org/t/p/original/5zMiji6nLQPW0N6rocXYVbQuJXo.jpg" },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem: "https://m.media-amazon.com/images/M/MV5BMjA2YTAxMzMtNzA2Mi00NTcyLTg4NzUtODIxYzFiYzdiNWNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem: "https://th.bing.com/th/id/R.d3a0467032585170838bb2cf06e14d42?rik=Hn8Rdgux0aiG1w&riu=http%3a%2f%2fwww.impawards.com%2ftv%2fposters%2fsocial_dilemma.jpg&ehk=mPtaO00WY5KzvXB01Ap96oPb4KlzMshBj4YO0aVt7Uc%3d&risl=&pid=ImgRaw&r=0" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem: "https://static2.showtimes.com/poster/660x980/my-octopus-teacher-netflix-151563.jpg" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem: "https://image.tmdb.org/t/p/original/pCDqytf6DAdR0U5TCR3dOKQX3yp.jpg" },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem: "https://tse4.mm.bing.net/th/id/OIP.KMIWwcKxxOjrJG1CwU72bwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", imagem: "https://www.outincanberra.com.au/wp-content/uploads/2017/05/GetOut_PosterArt.jpg" },
    ],
  },
];

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

function renderCategoria({ item }) {
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

            <View style={styles.overlay}>
              <Text
                style={styles.nomeFilme}
                numberOfLines={2}
              >
                {item.titulo}
              </Text>
            </View>

          </Pressable>

        )}
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
  },

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