import PropTypes from "prop-types";
import Book from "./Book";
import lodash from "lodash";

const BookShelf = ({books, shelfName}) => {

    return (

        <div className="bookshelf">
        <h2 className="bookshelf-title">{lodash.startCase(shelfName)}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.filter(b => b.shelf===shelfName).map(b=> <li><Book book={b} /></li>)
            }
          </ol>
        </div>
      </div>
    );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired
}

export default BookShelf;