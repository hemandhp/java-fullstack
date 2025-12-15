import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>No Songs Found</h2>
            <p>Your search did not match any song names or artists in the playlist.</p>
            <p>Try a different search query.</p>
        </div>
    );
};

export default NotFound;