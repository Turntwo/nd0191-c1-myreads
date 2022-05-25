import PropTypes from "prop-types";

const ShelfOption = ({text, value, currentShelf}) => {
    return (<option value={value}>{text} {(currentShelf===value) && "✔"} </option>);
}

ShelfOption.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currentShelf: PropTypes.string.isRequired
}

export default ShelfOption;