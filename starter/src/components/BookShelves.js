import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI.js"
import BookShelf from "./BookShelf.js";

const BookShelves = () => {

const [books, setBooks] = useState([]);

useEffect(() => {
  const getBooks = async () => {
    const books = await getAll();
    console.log(books);
    setBooks(books);
  }

  getBooks();
},[]);

const handleMoveBook = (book, shelf) => {
  const updateBook = async (book, shelf) => {
  console.log(`handling move book for book ${book.id} ${book.title} to shelf ${shelf}`);
  await update(book, shelf);  // Returns arrays of book ids on shelves, weird
  const books = await getAll();
  setBooks(books);
  };

  updateBook(book, shelf);
}


    return (
        (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf books={books} shelfName="currentlyReading" moveBook={handleMoveBook} />
                  <BookShelf books={books} shelfName="wantToRead" moveBook={handleMoveBook} />
                  <BookShelf books={books} shelfName="read" moveBook={handleMoveBook}/>
                </div>
              </div>
              <div className="open-search">
                <Link to="search">Add a book</Link>
              </div>
            </div>
          )
    );
}

BookShelves.propTypes = {

}

export default BookShelves;