import React from "react";
import ReactDOM from "react-dom";
// linking CSS
import "./index.css";

const books = [
  {
    author: "Amelia Hepworth",
    title: "I love you to the moon and back lol",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "Eric Carle",
    title: "The very hungry Caterpillar",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList({ books }) {
  return (
    <section className="booklist">
      {books.map((element) => {
        return <Book book={element} />;
      })}
    </section>
  );
}

const Book = ({ book }) => {
  return (
    <article className="book">
      <img src={book.img} alt="" />
      <h1>{book.title}</h1>
      <h4>{book.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList books={books} />, document.getElementById("root"));
