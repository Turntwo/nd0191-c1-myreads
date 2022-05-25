import PropTypes from "prop-types";
import ShelfOption from "./ShelfOption";

const Book = ({book, moveBook}) => {

const shelfChange = (e) => {
    e.preventDefault()
    console.log(`${e.target.value} ${book.shelf} ${book.id}`)
    if (book.shelf !== e.target.value)
        moveBook(book, e.target.value);
};

    return (

              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                        `url(${book.imageLinks.smallThumbnail})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select onChange={shelfChange} value={book.shelf}>
                      <option value="none" disabled>Move to...</option>
                      <ShelfOption value="currentlyReading" currentShelf={book.shelf} text="Currently Reading" />
                      <ShelfOption value="wantToRead" currentShelf={book.shelf} text="Want to Read" />
                      <ShelfOption value="read" currentShelf={book.shelf} text="Read" />
                      <ShelfOption value="none" currentShelf={book.shelf} text="None" />
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors.join(", ")}
                </div>
              </div>
    );
}

Book.propTypes = {
    book : PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default Book;