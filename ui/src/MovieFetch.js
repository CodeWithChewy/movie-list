import { useState, useEffect } from 'react';

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
            {/* Render your movieList data here */}
        </div>
    );
}

export default MovieList;
