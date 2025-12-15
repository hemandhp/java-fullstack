import React, { useState, useEffect } from 'react';
import AddSongForm from './AddSongForm';
import SearchBar from './SearchBar';
import Playlist from './Playlist';

const Home = () => {
    const [songs, setSongs] = useState([
        { id: 1, name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', genre: 'Pop' },
        { id: 2, name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', genre: 'Rock' },
    ]);
    
    const [filteredSongs, setFilteredSongs] = useState(songs);
    
    const [searchTerm, setSearchTerm] = useState('');

    const addSong = (newSong) => {
        const songWithId = { ...newSong, id: Date.now() }; 
        setSongs(prevSongs => [...prevSongs, songWithId]); 
    };

    const deleteSong = (id) => {
        setSongs(prevSongs => prevSongs.filter(song => song.id !== id)); 
    };

    useEffect(() => {
        let updatedList = [...songs];

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            updatedList = updatedList.filter(
                song => 
                    song.name.toLowerCase().includes(lowerCaseSearch) ||
                    song.artist.toLowerCase().includes(lowerCaseSearch) 
            );
        }

        setFilteredSongs(updatedList);
        
    }, [songs, searchTerm]); 

    return (
        <div className="home-container">
            <h1> Music Playlist Manager</h1>
            
            <AddSongForm addSong={addSong} />
            
            <SearchBar setSearchTerm={setSearchTerm} />

            <h2>My Playlist</h2>
            <Playlist 
                songs={filteredSongs} 
                deleteSong={deleteSong} 
            />
        </div>
    );
};

export default Home;