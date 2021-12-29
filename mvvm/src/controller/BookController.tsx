import React, { useState } from "react";

import BookViewModel from "../viewmodel/BookViewModel";
import BookView from "../view/BookView";

interface ControllerProps {
  viewModel: BookViewModel;
}
const BookController: React.FC<ControllerProps> = ({ viewModel }) => {
  const [renderFlag, setRenderFlag] = useState(true);

  const remove = (node: HTMLElement) => {
    viewModel.remove(node);
    setRenderFlag(!renderFlag);
  };

  return (
    <BookView
      books={viewModel.getAll()}
      handleClickRemove={(e: React.MouseEvent<HTMLElement>) =>
        remove(e.currentTarget.previousElementSibling as HTMLElement)
      }
    />
  );
};

export default BookController;
