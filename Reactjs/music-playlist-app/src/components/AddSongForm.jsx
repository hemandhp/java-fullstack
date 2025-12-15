import React, { useState } from 'react';

const AddSongForm = ({ addSong }) => {
    const [songData, setSongData] = useState({
        name: '',
        artist: '',
        album: '',
        genre: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSongData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (songData.name && songData.artist) {
            addSong(songData); 
            setSongData({ name: '', artist: '', album: '', genre: '' }); 
        } else {
            alert('Song Name and Artist are required!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-song-form">
            <h3>Add New Song</h3>
            <input type="text" name="name" placeholder="Song Name" value={songData.name} onChange={handleChange} required />
            <input type="text" name="artist" placeholder="Artist" value={songData.artist} onChange={handleChange} required />
            <input type="text" name="album" placeholder="Album" value={songData.album} onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" value={songData.genre} onChange={handleChange} />
            <button type="submit">Add Song</button>
        </form>
    );
};

export default AddSongForm;