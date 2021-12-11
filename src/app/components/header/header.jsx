import React, { useState } from "react";
import { Title } from "../../styledComponents/title";
import { Input } from "../../styledComponents/Input";
import { SearchBtn } from "../../styledComponents/searchButton";

const Header = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  console.log(books);
  const handleInputChange = ({ target }) => {
    setQuery((prevState) => (prevState, target.value));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=1`
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
      <div className="main-header">
        <div className="filter"></div>
        <Title>Google Books</Title>
        <div className="d-flex justify-content-center input-wrapper">
          <div style={{ width: "800px" }} className="d-flex ">
            <Input
              placeholder="Ввидите название книги"
              value={query}
              onChange={handleInputChange}
            />
            <SearchBtn grey onClick={handleSubmit}>
              поиск
            </SearchBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
