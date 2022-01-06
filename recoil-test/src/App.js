import { RecoilRoot } from "recoil";

import CharacterCounter from "./CharacterCounter";
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter></CharacterCounter>
        <ToDoList></ToDoList>
      </div>
    </RecoilRoot>
  );
}

export default App;
