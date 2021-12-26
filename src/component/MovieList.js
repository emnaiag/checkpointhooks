import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movies, movieName, rating }) => {
  const [filtreMovie, setFiltreMovie] = useState(movies);

  useEffect(() => {
    if (movieName.length !== 0 || rating !== 0) {
      setFiltreMovie(
        movies.filter((movie) => {
          return (
            movie.rating >= rating  && 
            movie.name.toLowerCase().includes(movieName.toLowerCase())
          );
        })
        );
    } else {
      setFiltreMovie(movies);
    }
  }, [movieName,rating,movies]);
  return (
    <div style={{ width: "80%", marginLeft: "130px", marginTop: "20px" }}>
      <MovieCard filtreMovie={filtreMovie} />
    </div>
  );
};

export default MovieList;
