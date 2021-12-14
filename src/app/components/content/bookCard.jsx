import React from "react";
import { Card } from "../../styledComponents/card";
import { CardBody, CardTitle } from "../../styledComponents/cardBody";
import { Img } from "../../styledComponents/img";
import { ImgContentWrap } from "../../styledComponents/imgContentWrap";
import { ImgWrap } from "../../styledComponents/imgWrap";
import { SearchBtn } from "../../styledComponents/searchButton";

const BookCard = ({ thumbnail }) => {
  return (
    <Card>
      <ImgWrap>
        <ImgContentWrap>
          <Img src={thumbnail} style={{ width: "100%", height: "233px" }} />
          <CardBody>
            <CardTitle>Naruto vol 23</CardTitle>
            <SearchBtn>More info</SearchBtn>
            <SearchBtn>More info</SearchBtn>
          </CardBody>
        </ImgContentWrap>
      </ImgWrap>
    </Card>
  );
};

export default BookCard;
