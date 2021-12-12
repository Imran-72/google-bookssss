import React from "react";
import { Card } from "../styledComponents/card";
import { ImgContentWrap } from "../styledComponents/imgContentWrap";
import { ImgWrap } from "../styledComponents/imgWrap";

const BookCard = ({ items }) => {
  return (
    <Card>
      <ImgWrap>
        <ImgContentWrap>
          {items.map((item) => {
            return <img src={item.volumeInfo.imageLinks.smallThumbnail} />;
          })}
        </ImgContentWrap>
      </ImgWrap>
    </Card>
  );
};

export default BookCard;
