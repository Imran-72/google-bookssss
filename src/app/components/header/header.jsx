import React, { useState } from "react";
import { Title } from "../../styledComponents/title";
import { Input } from "../../styledComponents/Input";
import { SearchBtn } from "../../styledComponents/searchButton";
import { Filter } from "../../styledComponents/filter";
import {
  InputContentWrap,
  InputWrapper,
} from "../../styledComponents/inputWrapper";

const Header = ({ onSubmit, onInputChange, query }) => {
  return (
    <>
      <div className="main-header">
        {/* <Filter /> */}
        <Title>Google Books</Title>
        <InputWrapper>
          <InputContentWrap>
            <Input
              placeholder="Ввидите название книги"
              value={query}
              onChange={onInputChange}
            />
            <SearchBtn grey onClick={onSubmit}>
              поиск
            </SearchBtn>
          </InputContentWrap>
        </InputWrapper>
      </div>
    </>
  );
};

export default Header;
