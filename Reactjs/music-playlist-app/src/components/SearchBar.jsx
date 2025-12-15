import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by Song Name or Artist..." 
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchBar;