import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('Fiction');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Please fill in all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
      category
    };

    onAddBook(newBook);

    setTitle('');
    setAuthor('');
    setYear('');
    setCategory('Fiction');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd' }}>
      <h3>Add a New Book</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" placeholder="Title" value={title} 
          onChange={(e) => setTitle(e.target.value)} required 
        />
        <input 
          type="text" placeholder="Author" value={author} 
          onChange={(e) => setAuthor(e.target.value)} required 
        />
        <input 
          type="number" placeholder="Year" value={year} 
          onChange={(e) => setYear(e.target.value)} required 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Biography">Biography</option>
        </select>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Book
        </button>
      </div>
    </form>
  );
};

AddBookForm.propTypes = {
  onAddBook: PropTypes.func
};

export default AddBookForm;