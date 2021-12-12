import { ADD_QUERY_INPUT, FETCHED_BOOKS } from "./types";

export function createQuery(text) {
  return {
    type: ADD_QUERY_INPUT,
    payload: text,
  };
}

export function getBooks(query) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=1`
      );
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      const data = await response.json();

      dispatch({ type: FETCHED_BOOKS, payload: data.items });
    } catch (e) {
      console.log(e);
    }
  };
}