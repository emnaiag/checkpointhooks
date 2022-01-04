import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
const MovieCard = ({ filtreMovie }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {filtreMovie.map((movie) => {
        return (
          <div key={movie.id}>
            <Link to={`/about/${movie.id}`}>
            <img src={movie.img} width={233} height={338} />
            </Link>
            <h3
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: ".5px",
                cursor: "pointer",
              }}
            >
              {movie.name}
            </h3>
            <h4 style={{ color: "#818185", fontSize: "13px" }}>
              {movie.description}
            </h4>
            <ReactStars
              count={5}
              size={24}
              value={movie.rating}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
