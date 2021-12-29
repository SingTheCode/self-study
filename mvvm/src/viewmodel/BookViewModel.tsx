import BookModel, { IBook, IBookModel } from "../model/BookModel";

class BookViewModel implements IBookModel {
  constructor(private model: BookModel) {}

  getAll(): IBook[] {
    return this.model.getAll();
  }

  get(idx: number): {} {
    return this.model.get(idx);
  }

  remove(node: HTMLElement) {
    return this.model.remove(node);
  }
}

export default BookViewModel;
