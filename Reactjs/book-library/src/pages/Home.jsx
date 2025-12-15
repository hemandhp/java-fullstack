import { useState, useEffect } from 'react';
import AddBookForm from '../components/AddBookForm';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('libraryBooks');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem('libraryBooks', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

 
  const filteredBooks = books.filter((book) => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Library Management App</h1>
      
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <AddBookForm onAddBook={addBook} />
      
      <BookList books={filteredBooks} onDelete={deleteBook} />
    </div>
  );
};

export default Home;