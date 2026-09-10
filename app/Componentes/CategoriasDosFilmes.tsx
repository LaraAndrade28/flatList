export default function CategoriasDosFilmes() {
  const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#3636b1", imagem: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/oppenheimer-poster.jpg", avaliacao: "8.5/10", ano: "2023", genero1: "Drama", genero2: "Biografia", genero3: "História", duracao: "2h 30min", sinopse: "Oppenheimer é um filme biográfico que narra a vida de J. Robert Oppenheimer, o físico teórico que liderou o Projeto Manhattan durante a Segunda Guerra Mundial. O filme explora sua jornada desde os primeiros dias de sua carreira acadêmica até seu papel crucial no desenvolvimento da bomba atômica, abordando os dilemas éticos e as consequências de suas ações." },
      { id: "1b", titulo: "Duna 2", cor: "#87279b", imagem: "https://tse2.mm.bing.net/th/id/OIP.GURNPPODfsKPHH6kkKqBRAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "8.0/10", ano: "2024", genero1: "Ficção Científica", genero2: "Aventura", genero3: "Ação", duracao: "2h 40min", sinopse: "Duna 2 é um filme de ficção científica que segue a jornada de Paul Atreides em sua busca por vingança e poder." },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem: "https://i.pinimg.com/originals/ad/34/ba/ad34bac0a881a18637ef84b24eb07acb.jpg", avaliacao: "7.5/10", ano: "2023", genero1: "Comédia", genero2: "fantasia", genero3: "Musical", duracao: "1h 55min", sinopse: "Barbie é um filme de comédia que explora o mundo mágico da boneca Barbie e suas aventuras." },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem: "https://tse2.mm.bing.net/th/id/OIP.nJRdTXTLjs4qOs0BAF5-RQHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "8.2/10", ano: "2023", genero1: "Drama", genero2: "Comédia", genero3: "Romance", duracao: "2h 15min", sinopse: "Poor Things é um filme de drama que acompanha a jornada de Bella Baxter, uma jovem mulher que enfrenta os desafios da vida." },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem: "https://tse3.mm.bing.net/th/id/OIP.Vooz-PPSDh6-UlrTuJVHQwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "7.8/10", ano: "2023", genero1: "Drama", genero2: "Comédia", genero3: "Romance", duracao: "1h 59min", sinopse: "Saltburn é um filme de drama que explora as complexidades das relações humanas e as consequências das escolhas." },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem: "https://tse1.mm.bing.net/th/id/OIP.WI9Q2nABesAOwW2_IiDqBAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "8.7/10", ano: "2023", genero1: "Ação", genero2: "Thriller", genero3: "Crime", duracao: "2h 49min", sinopse: "John Wick 4 é a continuação da saga do assassino aposentado John Wick, que enfrenta novos desafios e inimigos em sua busca por vingança." },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem: "https://cdn.ome.lt/images/movie/954/poster/pt.webp", avaliacao: "8.2/10", ano: "2023", genero1: "Ação", genero2: "Aventura", genero3: "Thriller", duracao: "2h 15min", sinopse: "Missão Impossível é um filme de ação que acompanha a jornada do agente Ethan Hunt em sua missão para salvar o mundo." },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", imagem: "https://www.picclickimg.com/nU8AAOSwJ1xkrUA9/Top-Gun-Maverick-Official-IMAX-Movie-Poster.webp", avaliacao: "8.0/10", ano: "2022", genero1: "Ação", genero2: "Drama", genero3: "Romance", duracao: "2h 10min", sinopse: "Top Gun é um filme de ação que retrata a vida de um piloto de caça do exército dos EUA." },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", imagem: "https://tse4.mm.bing.net/th/id/OIP.y5gnuiQQGjPZxOt2sg2dIQHaLI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "8.5/10", ano: "2015", genero1: "Ação", genero2: "Ficção Científica", genero3: "Drama", duracao: "1h 57min", sinopse: "Mad Max é um filme de ação que se passa em um futuro distópico onde a violência e a competição por recursos são comuns." },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem: "https://bananaroad.com/cdn/shop/products/pst2632_Superbad_Movie_Poster.jpg?v=1609189753", avaliacao: "7.6/10", ano: "2019", genero1: "Comédia", genero2: "Drama", genero3: "Romance", duracao: "1h 42min", sinopse: "Superbad é um filme de comédia que acompanha a jornada de dois amigos em sua última semana de colégio." },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", imagem: "https://tse4.mm.bing.net/th/id/OIP.hlOYA2OweZrkg1Xi4J7SUwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "8.1/10", ano: "2014", genero1: "Comédia", genero2: "Drama", genero3: "Histórico", duracao: "1h 39min", sinopse: "The Grand Budapest é um filme de comédia que se passa em um hotel luxuoso no século XX." },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem: "https://image.tmdb.org/t/p/original/5zMiji6nLQPW0N6rocXYVbQuJXo.jpg", avaliacao: "7.9/10", ano: "2019", genero1: "Comédia", genero2: "Thriller", genero3: "Crime", duracao: "1h 59min", sinopse: "Knives Out é um filme de comédia que acompanha a investigação de um assassinato em uma família rica." },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem: "https://m.media-amazon.com/images/M/MV5BMjA2YTAxMzMtNzA2Mi00NTcyLTg4NzUtODIxYzFiYzdiNWNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", avaliacao: "8.3/10", ano: "2020", genero1: "Documentário", genero2: "Drama", genero3: "Biografia", duracao: "1h 49min", sinopse: "Free Solo é um filme de documentário que acompanha a jornada do escalador Alex Honnold ao escalar o El Capitan sem cordas." },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem: "https://th.bing.com/th/id/R.d3a0467032585170838bb2cf06e14d42?rik=Hn8Rdgux0aiG1w&riu=http%3a%2f%2fwww.impawards.com%2ftv%2fposters%2fsocial_dilemma.jpg&ehk=mPtaO00WY5KzvXB01Ap96oPb4KlzMshBj4YO0aVt7Uc%3d&risl=&pid=ImgRaw&r=0", avaliacao: "7.5/10", ano: "2020", genero1: "Documentário", genero2: "Drama", genero3: "Ficção Científica", duracao: "1h 49min", sinopse: "The Social Dilemma é um filme de documentário que explora os impactos negativos das redes sociais na sociedade." },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem: "https://static2.showtimes.com/poster/660x980/my-octopus-teacher-netflix-151563.jpg", avaliacao: "8.7/10", ano: "2020", genero1: "Documentário", genero2: "Drama", genero3: "Natureza", duracao: "1h 49min", sinopse: "My Octopus Teacher é um filme de documentário que acompanha a jornada de um cineasta ao observar o comportamento de uma polvo em seu habitat natural." },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem: "https://image.tmdb.org/t/p/original/pCDqytf6DAdR0U5TCR3dOKQX3yp.jpg", avaliacao: "7.3/10", ano: "2018", genero1: "Terror", genero2: "Drama", genero3: "Suspense", duracao: "2h 2min", sinopse: "Hereditary é um filme de terror que acompanha a história de uma família que enfrenta um destino sombrio." },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem: "https://tse4.mm.bing.net/th/id/OIP.KMIWwcKxxOjrJG1CwU72bwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", avaliacao: "7.1/10", ano: "2019", genero1: "Terror", genero2: "Drama", genero3: "Romance", duracao: "1h 47min", sinopse: "Midsommar é um filme de terror que se passa em uma comunidade sueca durante o verão." },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", imagem: "https://www.outincanberra.com.au/wp-content/uploads/2017/05/GetOut_PosterArt.jpg", avaliacao: "7.7/10", ano: "2017", genero1: "Terror", genero2: "Drama", genero3: "Thriller", duracao: "1h 49min", sinopse: "Get Out é um filme de terror que acompanha a jornada de um jovem negro que visita a família de sua namorada." },
    ],
  },
];
return (
categorias
);
}