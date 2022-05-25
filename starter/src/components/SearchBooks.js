import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { search, update } from "../BooksAPI.js"
import Book from "./Book";

const SearchBooks = () => {
  const [books, setBooks] = useState([]);

  const searchChanged = async (e) => {
    const books = await search(e.target.value);
    console.log(books);
    setBooks(books);
  };

  const handleMoveBook = async (book, shelf) => {
    console.log(`handling move book for book ${book.id} ${book.title} to shelf ${shelf}`);
    await update(book, shelf);  // Returns arrays of book ids on shelves, weird
  };
  

    return (

          <div className="search-books">
            <div className="search-books-bar">
              <Link
                className="close-search"
                to="/"
              >
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  onChange={searchChanged}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                books.map(b=> <li key={b.id}><Book book={b} moveBook={handleMoveBook} /></li>)
              }
              </ol>
            </div>
          </div>
    );
}

export default SearchBooks;