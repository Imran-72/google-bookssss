import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./bookCard";

const BookCardContainer = () => {
  const books = useSelector((state) => state.booksRed.books);
  const loader = useSelector((state) => state.loader.loading);

  const handleCards = () => {
    if (loader) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <div
            className="spinner-border text-secondary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
      );
    } else {
      const items = books.map((item, i) => {
        let thumbnail = "";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };

  return <>{handleCards()}</>;
};

export default BookCardContainer;
