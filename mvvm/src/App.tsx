import React from "react";
import BookProvider from "./provider/BookProvider";

const App: React.FC = (children, props) => {
  return (
    <div className="App">
      <BookProvider />
    </div>
  );
};

export default App;
