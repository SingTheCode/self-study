import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Callback from "./page/Callback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
