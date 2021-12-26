import Nav from "./component/Nav";
import { useState } from "react";

import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "./once upon a time.jpg",
      description: "(2019) Drama, Action, Crime",
      name: "Once Upon a time in Philly",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "./big game.jpg",
      description: "(2015) Action, Adventure, Thriller",
      name: "Big Game",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "./i am that man.jpg",
      name: "I am that man",
      description: "(2019) Drama, Action, Thriller",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "./grow house.jpg",
      name: "Grow House",
      description: "(2017) Comedy",
      rating: 4,
    },
    {
      id:Math.random() ,
      img: "./merry wishmas.jpg",
      name: "Merry Wishmas",
      description: "(2018) Comedy, Drama, Romance",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "./asteroid.jpg",
      name: "Asteroid",
      description: "(2021) Comedy, Drama, Sci-Fi",
      rating: 4,
    },
    {
      id:Math.random() ,
      img: "./animosity.jpg",
      name: "Animosity",
      description: "(2013) Horror, Mystery",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "./Baby oopsie.jpg",
      name: "Baby Oopsie",
      description: "(2021) Horror, Fantasy, Mystery",
      rating: 4,
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
    <div className="App" style={{ backgroundColor: "#212529" }}>
      <Nav
        movieName={movieName}
        handleSearch={handleSearch}
        rating={rating}
        handleRating={handleRating}
        handleModal={handleModal}
      />
      <MovieList movies={movies} movieName={movieName} rating={rating} handleAddMovie={handleAddMovie}/>
      <AddMovie
        toggle={toggle}
        handleModal={handleModal}
        NewMovie={NewMovie}
        handleAddMovie={handleAddMovie}
      />
    </div>
  );
}

export default App;
