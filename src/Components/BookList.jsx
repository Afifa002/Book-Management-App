import Book from "./Book";
import "./style.css";
function BookList(props) {
  console.log("props", props);
  return (
    <>
      <div className="booklist">
        {props.booksData.map((data) => (
          <Book bookDetails={data}></Book>
        ))}
      </div>
    </>
  );
}
export default BookList;
