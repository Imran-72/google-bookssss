import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuery, getBooks } from "../../../redux/actions";
import { Filter } from "../../styledComponents/filter";
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
