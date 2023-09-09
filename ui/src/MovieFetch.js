import React, { useState, useEffect } from 'react';
import MovieAdd from './MovieAdd';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    let [search, setSearch] = useState('');
    let [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const url = "http://localhost:8080/movies";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovieList(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        const filteredMovies = movieList.filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
        setResults(filteredMovies);
        setShowResults(search !== '');
    }, [search, movieList]);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const addMovieToList = (newMovie) => {
        setMovieList([...movieList, newMovie]);
    };

    const handleMovieSubmit = (newMovieData) => {
        // Update the state with the new movie data
        setMovieList((prevMovieList) => [...prevMovieList, newMovieData]);

        // Display a confirmation message to the user
        alert(`The movie "${newMovieData.title}" has been added to the list.`);

        // Scroll to the newly added movie
        const newMovieElement = document.getElementById(`movie-${newMovieData.id}`);
        if (newMovieElement) {
            newMovieElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <h2>Movie List</h2>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleInputChange}
            />
            {showResults ? (
                <ul>
                    {results.length === 0 ? (
                        <li>Movie is not available</li>
                    ) : (
                        results.map(movie => (
                            <li key={movie.id} id={`movie-${movie.id}`}>
                                <h3>{movie.title}</h3>

                            </li>
                        ))
                    )}
                </ul>
            ) : null}
            <MovieAdd onMovieSubmit={handleMovieSubmit} />
        </div>
    );
};

export default MovieList;
