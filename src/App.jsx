import { Books } from "./utils/mockData";
import BookList from "./Components/BookList";
import { useState } from "react";
import "/Users/afifahashmi/book-man-app/vite-project/src/Components/style.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
function App() {
  const [searchText, setsearchText] = useState("");
  const [filteredBooks, setfilteredBooks] = useState(Books);

  function handleSearch() {
    console.log("search text", searchText);
    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Filtered Books", filteredBooks);
    setfilteredBooks(filterBooks);
  }

  return (
    <>
      <Header />
      <div className="search">
        <h2>Search Books</h2>

        <div>
          <input
            type="text"
            name=""
            id=""
            className="search-input"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <BookList booksData={filteredBooks} />
      <Outlet />
    </>
  );
}

export default App;
