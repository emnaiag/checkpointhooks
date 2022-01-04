import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player';

const MovieDescription = ({ movies }) => {
  const [movieDescription, setMovieDescription] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setMovieDescription(movies.find((movie) => movie.id == id));
  }, [id]);

  console.log(movieDescription.description);
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop: "60px", marginLeft:"350px"}}>
      <ReactPlayer url={movieDescription.trailer}/>
      <div style={{display:"flex", marginTop: "30px", marginBottom: "20px"}}><img src={movieDescription.img} alt={movieDescription.name} width="233px"  height="338px"/>
      <div style={{marginLeft:"20px", fontSize:"43px"}}><h1>{movieDescription.name}</h1>
      <h5 style={{fontSize:"12px",color:"#ffffff80", fontFamily:"Helvetica Neue, sans-serif"}}>{movieDescription.description}</h5></div></div>
      
    </div>
  );
};

export default MovieDescription;
