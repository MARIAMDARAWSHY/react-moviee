import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import Background from '../Background/Background';
import './AddMovieCSS.css';

export default function AddMovie() {
    const [showMovie, setShowMovie] = useState([]);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [poster, setPoster] = useState('');

    const displayMovie = () => {
        setShowMovie([{"Title": title, "Year": year, "Type": type, "Poster": poster}]);
    };

    return (
        <>
            <Navbar />
            <Background />
            <div className="about-container">
                <div className="about-text">
                    <h2>You Can Add A Movie Here</h2>
                    <div className="form-container">
                        <form>
                            <label>Movie Title: </label>
                            <input type="text" name="movieTitle" placeholder="" required onChange={event => setTitle(event.target.value)} />
                            <label>Year: </label>
                            <input type="text" name="movieYear" required onChange={event => setYear(event.target.value)} />
                            <label>Type: </label>
                            <input type='text' name='movieType' required onChange={event => setType(event.target.value)} />
                            <label>Poster: </label>
                            <input type='text' name='moviePoster' required onChange={event => setPoster(event.target.value)} />
                            <button className="form-button" onClick={displayMovie}>Add Movie</button>
                        </form>
                    </div>
                    {showMovie.map((movie, index) => {
                        return (
                            <div key={index}>
                                <h3>{movie.Title}</h3>
                                <p>{movie.Year}</p>
                                <p>{movie.Type}</p>
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}
