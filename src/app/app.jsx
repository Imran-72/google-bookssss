import React, { useState } from "react";
import BookCard from "./components/bookCard";
import Header from "./components/header/header";
import { Container } from "./styledComponents/container";

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  console.log(books);
  const handleInputChange = ({ target }) => {
    setQuery((prevState) => (prevState, target.value));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=1`
      );
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      const data = await response.json();
      setBooks(data.items);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Header
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        query={query}
      />
      <Container>
        <BookCard books={books} />
      </Container>
    </>
  );
};

export default App;
