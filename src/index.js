import React from "react";
import ReactDOM from "react-dom";
// linking CSS
import "./index.css";

const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I love you to the moon and back lol",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    author: "Eric Carle",
    title: "The very hungry Caterpillar",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
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
        return <Book key={element.id} {...element} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // the eventHandler function for the onClick event below
  // We can use inline function
  const clickHandler = (e) => {
    console.log(e); /*event object */
    console.log(e.target);
    alert("Hello World!");
  };
  const moreComplex = (word) => {
    console.log(word);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
      <button type="button" onClick={() => moreComplex(author)}>
        more complex
      </button>
    </article>
  );
};

ReactDOM.render(<BookList books={books} />, document.getElementById("root"));
