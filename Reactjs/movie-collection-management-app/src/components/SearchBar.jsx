import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by Movie Name or Director..." 
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchBar;