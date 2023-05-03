import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";
import searchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=dc0453b9";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);

  const searchMovies = async (title, event) => {
    if (event.key === 'Enter') {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);
    setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          palceholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
