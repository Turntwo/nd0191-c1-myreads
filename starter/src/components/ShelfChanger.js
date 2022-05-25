import PropTypes from "prop-types";
import ShelfOption from "./ShelfOption";

const ShelfChanger = ({book, moveBook}) => {

const shelfChange = (e) => {
    e.preventDefault()
    if (book.shelf !== e.target.value)
        moveBook(book, e.target.value);
};

    const currentShelf = !book.shelf ? "none" : book.shelf;

    return (
                  <div className="book-shelf-changer">
                    <select onChange={shelfChange} value={currentShelf}>
                      <option value="none" disabled>Move to...</option>
                      <ShelfOption value="currentlyReading" currentShelf={currentShelf} text="Currently Reading" />
                      <ShelfOption value="wantToRead" currentShelf={currentShelf} text="Want to Read" />
                      <ShelfOption value="read" currentShelf={currentShelf} text="Read" />
                      <ShelfOption value="none" currentShelf={currentShelf} text="None" />
                    </select>
                  </div>
    );
}

ShelfChanger.propTypes = {
    book : PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
}

export default ShelfChanger;