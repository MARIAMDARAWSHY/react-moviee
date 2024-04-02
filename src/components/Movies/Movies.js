import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import './Movies.css'; 

function Movies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=2acd84b9`);
        if (response.data && response.data.Search) {
          setMovies(response.data.Search);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (search !== "") {
      fetchData();
    }
  }, [search]);

  return (
    <div>
      <Navbar />
      <Background />
      <div class="movies-container">
        <div class="movies-text">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <ul>
            {movies.map((movie, index) => (
              <li key={index} onMouseEnter={() => setSelectedMovie(movie)} onMouseLeave={() => setSelectedMovie(null)}>
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Title}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedMovie && (
          <div class="notification">
            <h2>{selectedMovie.Title}</h2>
            <p>Year: {selectedMovie.Year}</p>
            <p>Type: {selectedMovie.Type}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
