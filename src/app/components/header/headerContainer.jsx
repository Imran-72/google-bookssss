import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createQuery, getBooks } from "../../../redux/actions";
import Header from "./header";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.queryRed.query);

  const focusRef = useRef();

  const handleInputChange = ({ target }) => {
    dispatch(createQuery(target.value));
  };

  const handleSubmit = () => {
    if (!query) {
      return focusRef.current.focus();
    }

    dispatch(getBooks(query));
  };

  return (
    <>
      <Header
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        query={query}
        referense={focusRef}
      />
    </>
  );
};

export default HeaderContainer;
