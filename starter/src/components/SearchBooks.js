import { Link } from "react-router-dom";
import { useState } from "react";
import { getAll, search, update } from "../BooksAPI.js"
import Book from "./Book";

const SearchBooks = () => {
  const [books, setBooks] = useState([]);

  const searchChanged = async (e) => {
    const searchText = e.target.value;
    
    if (!searchText || searchText.trim()==="")
    {
      setBooks([]);
      return;
    }
    
    const matchingBooks = await search(searchText.trim());
    if (matchingBooks.error)
    {
      setBooks([]);
      return;
    }

    const shelvedBooks = await getAll();

    const books = matchingBooks.map(b => {
      const match = shelvedBooks.find(sb => sb.id===b.id);
      const shelf = !match || !match.shelf ? "none" : match.shelf;
      const newBook = {...b, shelf: shelf};
      return newBook;
    })

    setBooks(books);
  
  };

  const handleMoveBook = async (book, shelf) => {
    console.log(`Handling move book for book ${book.id} ${book.title} to shelf ${shelf} from SearchBooks`);
    const booksOnShelves = await update(book, shelf);  // Returns arrays of book ids on shelves, weird
    const newBooks = books.map(b => {
      let newShelf = "none";
      for (var key in booksOnShelves) {
        if (booksOnShelves.hasOwnProperty(key) && Array.isArray(booksOnShelves[key]) && booksOnShelves[key].find(id => id===b.id)) {
          newShelf = key;
          break;
        }
      }

      return {
      ...b,
      shelf: newShelf
    }});
    setBooks(newBooks);
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