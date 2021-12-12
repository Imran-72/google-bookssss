import React from "react";
import { Card } from "../../styledComponents/card";
import { Img } from "../../styledComponents/img";
import { ImgContentWrap } from "../../styledComponents/imgContentWrap";
import { ImgWrap } from "../../styledComponents/imgWrap";

const BookCard = ({ thumbnail }) => {
  return (
    <Card>
      <ImgWrap>
        <ImgContentWrap>
          <Img src={thumbnail} style={{ width: "100%", height: "233px" }} />
        </ImgContentWrap>
      </ImgWrap>
    </Card>
  );
};

export default BookCard;
