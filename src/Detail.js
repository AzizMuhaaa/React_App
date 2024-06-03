import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './css/styleDetail.css'

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location, navigate]);

  if (!location.state) {
    return null;
  }

  return (
    <div className="movie-container">
      <img src={location.state.img} alt={location.state.title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{location.state.title}</h2>
        <h5 className="movie-year">{location.state.year}</h5>
        <ul className="movie-genres">
          {location.state.genres.map((genre, index) => (
            <li key={index} className="genre-item">{genre}</li>
          ))}
        </ul>
        <p className="movie-summary">{location.state.summary}</p>
      </div>
    </div>
  );
  
  
  
};

export default Detail;
