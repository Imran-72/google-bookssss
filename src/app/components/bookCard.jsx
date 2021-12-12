import React from "react";
import { Card } from "../styledComponents/card";
import { ImgContentWrap } from "../styledComponents/imgContentWrap";
import { ImgWrap } from "../styledComponents/imgWrap";

const BookCard = ({ books }) => {
  return (
    <>
      <Card>
        <ImgWrap>
          <ImgContentWrap>
            {books.map((item) => {
              return <img src={item.volumeInfo.imageLinks.smallThumbnail} />;
            })}
          </ImgContentWrap>
        </ImgWrap>
      </Card>
      {/* <div>
        {books.map((item) => {
          return (
            <ul>
              <li key={item.id}>{item.volumeInfo.title}</li>
            </ul>
          );
        })}
      </div> */}
    </>
  );
};

export default BookCard;
