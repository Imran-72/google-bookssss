import React from "react";
import BookCardContainer from "./content/bookCardContainer";
import HeaderContainer from "./header/headerContainer";

const App = () => {
  return (
    <>
      <div className="w-100 h-100">
        <HeaderContainer />
        <BookCardContainer />
      </div>
    </>
  );
};

export default App;
