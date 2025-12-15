import React from 'react';
import SongCard from './SongCard';
import NotFound from './NotFound';

const Playlist = ({ songs, deleteSong }) => {
    if (songs.length === 0) {
        return <NotFound />; 
    }

    return (
        <div className="playlist">
            {songs.map(song => (
                <SongCard 
                    key={song.id} 
                    song={song}
                    deleteSong={deleteSong}
                />
            ))}
        </div>
    );
};

export default Playlist;