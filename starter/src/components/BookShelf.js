import PropTypes from "prop-types";
import Book from "./Book";
import lodash from "lodash";

const BookShelf = ({books, shelfName, moveBook}) => {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{lodash.startCase(shelfName)}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.filter(b => b.shelf===shelfName).map(b=> <li key={b.id}><Book book={b} moveBook={moveBook} /></li>)
        }
      </ol>
    </div>
  </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  moveBook: PropTypes.func.isRequired
};

export default BookShelf;