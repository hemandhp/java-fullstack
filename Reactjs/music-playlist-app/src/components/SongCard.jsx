import React from 'react';

const SongCard = ({ song, deleteSong }) => {
    const handleDelete = () => {
        deleteSong(song.id);
    };

    return (
        <div className="song-card">
            <h4>{song.name}</h4> 
            <p>Artist: {song.artist}</p> 
            <p>Album: {song.album}</p>     
            <p className="genre">Genre: {song.genre}</p>
            
            <button onClick={handleDelete} className="delete-btn">
                Delete
            </button>
        </div>
    );
};

export default SongCard;