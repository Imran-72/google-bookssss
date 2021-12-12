import React from "react";
import { Title } from "../../styledComponents/title";
import { Input } from "../../styledComponents/Input";
import { SearchBtn } from "../../styledComponents/searchButton";
import { Filter } from "../../styledComponents/filter";
import {
  InputContentWrap,
  InputWrapper,
} from "../../styledComponents/inputWrapper";
import { MainHeader } from "../../styledComponents/mainHeader";

const Header = ({ onSubmit, onInputChange, query, referense }) => {
  return (
    <>
      <MainHeader>
        {/* <Filter/> */}
        <Title>Google Books</Title>
        <InputWrapper>
          <InputContentWrap>
            <Input
              placeholder="Ввидите название книги"
              value={query}
              onChange={onInputChange}
              ref={referense}
            />
            <SearchBtn grey onClick={onSubmit}>
              поиск
            </SearchBtn>
          </InputContentWrap>
        </InputWrapper>
      </MainHeader>
    </>
  );
};

export default Header;
