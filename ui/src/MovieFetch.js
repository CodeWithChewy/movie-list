import React, { useState, useEffect } from 'react';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const url = "http://localhost:8080/movies";

    useEffect(() => {
        // Fetch data when the component mounts
        fetch(url)
            .then(res => res.json())
            .then(data => setMovieList(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty dependency array means this effect runs once on component mount

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movieList.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
