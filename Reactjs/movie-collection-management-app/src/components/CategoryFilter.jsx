import React from 'react';

const categories = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

const CategoryFilter = ({ setCategoryFilter }) => {
    const handleFilterChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    return (
        <div className="category-filter">
            <select onChange={handleFilterChange}>
                {categories.map(cat => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;