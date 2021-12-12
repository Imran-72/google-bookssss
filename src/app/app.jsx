import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createQuery, getBooks } from "../redux/actions";
import BookCard from "./components/bookCard";
import Header from "./components/header/header";
import { Container } from "./styledComponents/container";

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksRed.books);
  const query = useSelector((state) => state.queryRed.query);

  const handleInputChange = ({ target }) => {
    dispatch(createQuery(target.value));
  };

  const handleSubmit = () => {
    dispatch(getBooks(query));
  };

  return (
    <>
      <Header
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        query={query}
      />
      <Container>
        <BookCard items={books} />
      </Container>
    </>
  );
};

export default App;
