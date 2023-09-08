import React, { useState, useEffect } from 'react';

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
        setSearch(e.target.value)
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
                            <li key={movie.id}>
                                <h3>{movie.title}</h3>
                                <p>{movie.description}</p>
                            </li>
                        ))
                    )}
                </ul>
            ) : null}
        </div>
    );
}

export default MovieList;
