import PropTypes from 'prop-types';

const BookCard = ({ book, onDelete }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '15px', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffffff',
      color:'black',
      boxShadow: '0 2px 5px rgba(23, 207, 41, 1)'}}>
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>{book.title}</h4>
        <p style={{ margin: '0', color: '#555' }}>
          Author: {book.author} | Year: {book.year} | <span style={{ fontStyle: 'italic' }}>{book.category}</span>
        </p>
      </div>
      
      <button 
        onClick={() => onDelete(book.id)} 
        style={{ 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          padding: '8px 12px', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
  onDelete: PropTypes.func
};

export default BookCard;