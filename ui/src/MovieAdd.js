import React, { useState } from 'react';
import MovieList from './MovieFetch';

const MovieAdd = ({ onMovieSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle the successful response here, if needed
                alert(`The movie "${formData.title}" has been added to the list.`);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

        // Clear the form after submission
        setFormData({
            title: '',

        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default MovieAdd;
