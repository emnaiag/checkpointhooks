import { NavDropdown } from "react-bootstrap";
import icons from "../assets/icon.png";
import ReactStars from "react-rating-stars-component";

import "./Nav.css";

function Nav({ movieName, handleSearch, rating, handleRating, handleModal }) {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <img src={icons} weight={40} width={50} />
      <a class="navbar-brand" href="#">
        TuniFilm
      </a>
      <NavDropdown
          id="nav-dropdown-dark-example"
          title="Genres"
          menuVariant="dark"
          style={{color:"#ffff"}}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
        </NavDropdown>
      <form class="form-inline" style={{ marginLeft: "150px" }}>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Find movies"
          aria-label="Search"
          style={{
            borderRadius: "40px",
            background: "hsla(0,0%,100%,.5)",
            color: "white",
            textAlign: "center",
            outline: "0",
            marginRight: "180px",
          }}
          value={movieName}
          onChange={handleSearch}
        ></input>
      </form>
      <ReactStars
        count={5}
        size={24}
        value={rating}
        isHalf={false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        onChange={handleRating}
      />
      <button
        onClick={handleModal}
        style={{
          backgroundColor: "#4D4AE8",
          borderRadius: "1rem",
          color: "#FFFFFF",
          fontFamily: "Inter,sans-serif",
          marginLeft: "300px",
        }}
      >
        Add Movie
      </button>
    </nav>
  );
}

export default Nav;
