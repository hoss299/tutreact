import React from "react";
import ReactDOM from "react-dom";

// linking CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book.js";

function BookList({ books }) {
  return (
    <section className="booklist">
      {books.map((element) => {
        return <Book key={element.id} {...element} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList books={books} />, document.getElementById("root"));
