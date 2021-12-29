import React, { MouseEventHandler, ReactNode } from "react";

import { IBook } from "../model/BookModel";

export interface IProps {
  children?: ReactNode;
  handleClickRemove: MouseEventHandler;
  books: Array<IBook>;
}

const BookView: React.FC<IProps> = ({ children, handleClickRemove, books }) => {
  return (
    <React.Fragment>
      <div className="list">
        <ul>
          {books.map((book: IBook, idx: number) => (
            <li key={idx}>
              <span>
                {book.author}-[{book.name}]
              </span>
              <button onClick={handleClickRemove} style={{ color: "red" }}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BookView;
