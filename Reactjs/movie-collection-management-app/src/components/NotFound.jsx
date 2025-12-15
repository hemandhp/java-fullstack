import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>No Movies Found</h2>
            <p>Your search or filter criteria did not match any movies in the collection.</p>
            <p>Try adjusting your search term or category filter.</p>
        </div>
    );
};

export default NotFound;