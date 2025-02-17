import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const Book = ({book, moveBook}) => {
    return (
        <div className="book">
        <div className="book-top">
            { book.imageLinks && book.imageLinks.smallThumbnail &&
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage:
                `url(${book.imageLinks.smallThumbnail})`,
            }}
            ></div>
            }
            <ShelfChanger book={book} moveBook={moveBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
            {book.authors && book.authors.join(", ")}
        </div>
        </div>
    );
};

Book.propTypes = {
    book : PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
};

export default Book;