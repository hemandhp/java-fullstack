import React, { useState } from 'react';

const categories = ['Action', 'Comedy', 'Horror', 'Romance', 'Sci-Fi'];

const AddMovieForm = ({ addMovie }) => {
    const [movieData, setMovieData] = useState({
        name: '',
        director: '',
        year: '',
        category: categories[0] 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovieData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (movieData.name && movieData.director && movieData.year) {
            addMovie({
                ...movieData,
                year: parseInt(movieData.year) 
            });
           
            setMovieData({ name: '', director: '', year: '', category: categories[0] });
        } else {
            alert('Please fill in all required fields!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <h3>Add New Movie</h3>
            <input
                type="text"
                name="name"
                placeholder="Movie Name"
                value={movieData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="director"
                placeholder="Director"
                value={movieData.director}
                onChange={handleChange}
            />
            <input
                type="number"
                name="year"
                placeholder="Year"
                value={movieData.year}
                onChange={handleChange}
            />
            <select name="category" value={movieData.category} onChange={handleChange}>
                {categories.map(cat => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button type="submit">Add Movie</button> 
        </form>
    );
};

export default AddMovieForm;