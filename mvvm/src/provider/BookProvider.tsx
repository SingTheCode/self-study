import React, { useState } from "react";

import BookModel from "../model/BookModel";
import BookViewModel from "../viewmodel/BookViewModel";
import BookController from "../controller/BookController";

const BookProvider: React.FC = () => {
  const model = new BookModel();
  const [viewModel] = useState(new BookViewModel(model));

  return <BookController viewModel={viewModel} />;
};

export default BookProvider;
