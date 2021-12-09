import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const Header = () => {
  return (
    <>
      <div className="main-header">
        {/* <div className="d-flex justify-content-between"> */}
        {/* <div>Logo</div> */}
        <div className="d-flex justify-content-center input-wrapper">
          <div style={{ width: "900px" }} className="d-flex ">
            <Input placeholder="Ввидите название книги" />
            <Button>поиск</Button>
          </div>
        </div>
        {/* <div>вход/регистрация</div>
        <div>корзина</div> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default Header;
