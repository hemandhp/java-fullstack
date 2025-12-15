import React, { useState, useEffect } from 'react';
import AddMovieForm from './AddMovieForm';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import MovieList from './MovieList';

const Home = () => {
    
    const [movies, setMovies] = useState([
        { id: 1, name: 'The Matrix', director: 'The Wachowskis', year: 1999, category: 'Sci-Fi' },
        { id: 2, name: 'Rush Hour', director: 'Brett Ratner', year: 1998, category: 'Action' },
        { id: 3, name: 'Home Alone', director: 'Chris Columbus', year: 1990, category: 'Comedy' },
    ]);
    
    const [filteredMovies, setFilteredMovies] = useState(movies);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All'); 

  
    const addMovie = (newMovie) => {
        const movieWithId = { ...newMovie, id: Date.now() };
        setMovies(prevMovies => [...prevMovies, movieWithId]);
    };

    const deleteMovie = (id) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    useEffect(() => {
        let updatedList = [...movies];

        if (categoryFilter !== 'All') {
            updatedList = updatedList.filter(movie => movie.category === categoryFilter);
        }

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            updatedList = updatedList.filter(
                movie => 
                    movie.name.toLowerCase().includes(lowerCaseSearch) ||
                    movie.director.toLowerCase().includes(lowerCaseSearch)
            );
        }

        setFilteredMovies(updatedList);
        
    }, [movies, searchTerm, categoryFilter]); 

    return (
        <div className="home-container">
            <h1>🎬 Movie Collection Manager</h1>
            
            <section className="controls">
                <AddMovieForm addMovie={addMovie} />
                <div className="filter-and-search">
                    <SearchBar setSearchTerm={setSearchTerm} />
                    <CategoryFilter setCategoryFilter={setCategoryFilter} />
                </div>
            </section>

            <section className="movie-list-section">
                <h2>My Movie List</h2>
                <MovieList 
                    movies={filteredMovies} 
                    deleteMovie={deleteMovie} 
                />
            </section>
        </div>
    );
};

export default Home;