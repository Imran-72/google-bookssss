import React from "react";
import { Title } from "../title";
import { Input } from "./Input";
import { SearchBtn } from "./searchButton";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="filter"></div>
        <Title>Google Books</Title>
        <div className="d-flex justify-content-center input-wrapper">
          <div style={{ width: "800px" }} className="d-flex ">
            <Input placeholder="Ввидите название книги" />
            <SearchBtn grey>поиск</SearchBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
