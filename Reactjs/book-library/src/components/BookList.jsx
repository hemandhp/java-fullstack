import BookCard from './BookCard';
import PropTypes from 'prop-types';

const BookList = ({ books, onDelete }) => {
    return (
        <div>
            <h3>All Books ({books.length})</h3>

            {books.length === 0 ? (
                <p style={{ color: 'gray' }}>No books found.</p>
            ) : (
                <div style={{ display: 'grid', gap: '15px' }}>
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} onDelete={onDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    onDelete: PropTypes.func
};

export default BookList;