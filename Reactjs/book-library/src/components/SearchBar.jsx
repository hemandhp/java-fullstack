import PropTypes from 'prop-types';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
        
      <input
        type="text"
        placeholder="Search by Title or Author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func
};

export default SearchBar;