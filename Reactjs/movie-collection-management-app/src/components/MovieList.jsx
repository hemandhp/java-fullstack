import React from 'react';
import MovieCard from './MovieCard';
import NotFound from './NotFound';

const MovieList = ({ movies, deleteMovie }) => {
    if (movies.length === 0) {
        return <NotFound />; 
    }

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie}
                    deleteMovie={deleteMovie}
                />
            ))}
        </div>
    );
};

export default MovieList;