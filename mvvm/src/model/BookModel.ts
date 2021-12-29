import { ReactNode } from "react";

export interface IBook {
  name: string;
  author: string;
}

export interface IBookModel {
  getAll(): Array<IBook>;
  get(idx: number): {};
  remove(node: Element): void;
}

class BookModel implements IBookModel {
  books: Array<IBook>;
  constructor() {
    this.books = [
      {
        name: "파이썬으로 배우는 웹 크롤러",
        author: "박정태",
      },
      {
        name: "자바스크립트로 서버와 클라이언트 구축하기",
        author: "박정태",
      },
      {
        name: "블록체인 프로젝트",
        author: "박정태",
      },
    ];
  }

  add(book: IBook) {
    this.books.push(book);
  }

  remove(node: HTMLSpanElement) {
    node.style.display = "none";
    //원래는 books 자체를 직접 조작
  }

  update(idx: number, book: IBook) {
    this.books[idx] = book;
  }

  get(idx: number): {} {
    return this.books[idx];
  }

  getAll(): Array<IBook> {
    return this.books;
  }
}

export default BookModel;
