import React from "react";

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
        // console.log(title);
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

export default Book;
