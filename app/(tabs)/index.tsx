import {View, StyleSheet, FlatList, Text, Image, TextInput} from 'react-native';
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
      <View style={{ flex: 1, padding: 9, backgroundColor: '#0f060f' }}>
        <FlatList
          data = {categorias}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoria}
        />
      </View>
    );
}

function renderCategoria({item}:{item:any}){
  return (
    <View style={styles.categotias}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <FlatList
        data = {item.filmes}
        keyExtractor={filme=>filme.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
        renderItem={(({item})=>(
          <Image 
            source={{ uri: item.imagem }}
            style={[styles.filme]}
            resizeMode="cover"
          >
          </Image>
        ))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categotias: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    height: 400,
    color: '#fff',
  },
  filme: {
    borderRadius: 5,
    marginBottom: 10,
    width: 150,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer',
    shadowColor: "#000",
  },
  filmeTexto: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  titulo: {
    fontFamily: 'arial',
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10,
  },
});