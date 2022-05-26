import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI.js"
import BookShelf from "./BookShelf.js";

const BookShelves = () => {

const [books, setBooks] = useState([]);

const getBooks = async () => {
  const books = await getAll();
  setBooks(books);
}

useEffect(() => {
  getBooks();
},[]);

const handleMoveBook = async (book, shelf) => {
  console.log(`Handling move book for book ${book.id} ${book.title} to shelf ${shelf} from BookShelves`);
  await update(book, shelf);  // Returns arrays of book ids on shelves, weird
  getBooks();
  };


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

export default BookShelves;