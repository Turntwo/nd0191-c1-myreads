import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BookShelves from "./components/BookShelves";
import SearchBooks from "./components/SearchBooks";

function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<BookShelves />} />
          <Route exact path="/search" element={<SearchBooks />} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
