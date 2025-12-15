import React from 'react';

const MovieCard = ({ movie, deleteMovie }) => {
    const handleDelete = () => {
        deleteMovie(movie.id); 
    };

    return (
        <div className="movie-card">
            <h4>{movie.name} ({movie.year})</h4>
            <p>Director: {movie.director}</p>
            <p className="category">Category: {movie.category}</p>
            
            <button onClick={handleDelete} className="delete-btn">
                Delete
            </button>
        </div>
    );
};

export default MovieCard;