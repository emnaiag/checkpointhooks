import Nav from "./component/Nav";
import { useState } from "react";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";
import MovieDescription from "./component/MovieDescription";
import { Switch, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZ3XoL0_SNObIQ90UpeHaoMmdkSm-l7y2vNwHq-AGFDAtcZ-AnZKXlvc8UpnnigqyAAs&usqp=CAU",
      description: "(2019) Drama, Action, Crime",
      name: "Once Upon a time in Philly",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=pabgLch4DjY",
    },
    {
      id: Math.random(),
      img: "https://media.senscritique.com/media/000019851183/source_big/Big_Game.jpg",
      description: "(2015) Action, Adventure, Thriller",
      name: "Big Game",
      rating: 3,
      trailer: "https://www.youtube.com/watch?v=vR-0mwLXiow",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BNzM5ZDUxMGQtNDMyNy00NzE2LWI5YjktNjQ5ZTdjM2Y0YWYzXkEyXkFqcGdeQXVyNzQyOTEyMjE@._V1_.jpg",
      name: "I am that man",
      description: "(2019) Drama, Action, Thriller",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=Gi-2DMJoXpk",
    },
    {
      id: Math.random(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQf0olYmNbZnyQwpglwVUzKjKoD1gFuYTEdSTG91eIsWah1TBwd4n1IYYZIcBRxkCFNoQ&usqp=CAU",
      name: "Grow House",
      description: "(2017) Comedy",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=nmlb_7g8SfM"
    },
    {
      id: Math.random(),
      img: "https://canvas-bridge02.tubitv.com/OFLY7FEGyE2jlVminVetaoTdMTE=/400x574/smart/img.adrise.tv/87ff51d6-5398-4d0c-ae2c-0fd95f5458c7.jpg",
      name: "Merry Wishmas",
      description: "(2018) Comedy, Drama, Romance",
      rating: 2,
      trailer: "https://www.youtube.com/watch?v=LDwRm9MPal4"
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMzViZjQzOWMtY2E0NC00MjZjLWJlMzItMjIzNmU3ZDEwYTg0XkEyXkFqcGdeQXVyMjg2Nzg1MzM@._V1_.jpg",
      name: "Asteroid",
      description: "(2021) Comedy, Drama, Sci-Fi",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=AQQQI8Vuiy0",
    },
    {
      id: Math.random(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDpReq9E1RxvaVGTo3wkEckn8BWVIomx49H9ZxzDTwOryNU0xfkiX7XlBl3_-DSxUyEI&usqp=CAU",
      name: "Animosity",
      description: "(2013) Horror, Mystery",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=E2AszoJKWkg"
    },
    {
      id: Math.random(),
      img: "https://i0.wp.com/www.horrorsociety.com/wp-content/uploads/2021/09/poster-6.jpg?fit=590%2C960&ssl=1",
      name: "Baby Oopsie",
      description: "(2021) Horror, Fantasy, Mystery",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=qvWdXRnA2yE",
    },
  ]);
  console.log(movies);
  const [movieName, setmovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [NewMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    description: "",
    rating: 0,
  });
  const handleSearch = (e) => {
    setmovieName(e.target.value);
  };
  const handleRating = (newRating) => {
    setRating(newRating);
  };
  const handleModal = () => {
    if (NewMovie.name.length !== 0 && NewMovie.img.length !== 0) {
      setMovies([...movies, NewMovie]);
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }
  };
  const handleAddMovie = (e) => {
    setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
  };
  return (
    <div className="App" style={{ backgroundColor: "#212529", color: "white" }}>
      <Nav
        movieName={movieName}
        handleSearch={handleSearch}
        rating={rating}
        handleRating={handleRating}
        handleModal={handleModal}
      />
      <Switch>
        <Route path="/about/:id">
          <MovieDescription movies={movies} />
        </Route>
        <Route path="/">
          <MovieList
            movies={movies}
            movieName={movieName}
            rating={rating}
            handleAddMovie={handleAddMovie}
          />
          <AddMovie
            toggle={toggle}
            handleModal={handleModal}
            NewMovie={NewMovie}
            handleAddMovie={handleAddMovie}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
