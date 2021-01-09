import React from "react";
import ReactDOM from "react-dom";
// linking CSS
import "./index.css";

const firstBook = {
  author: "Amelia Hepworth",
  title: "I love you to the moon and back lol",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};
const secondBook = {
  author: "Eric Carle",
  title: "The very hungry Caterpillar",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ullam
          assumenda expedita deserunt odit incidunt, consequuntur rem atque
          pariatur magnam.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          nihil?
        </div>
      </Book>
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // children property is not changed syntactically
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
