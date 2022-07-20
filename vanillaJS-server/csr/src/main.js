import { TodoList } from "./components.js";
import { store } from "./store.js";

// DOM을 직접적으로 다루는 코드입니다.
const render = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = TodoList();
  $app.querySelectorAll("li").forEach((el) => {
    el.addEventListener("click", () => {
      const { id } = el.dataset;
      store.toggleActivation(
        store.state.todoItems.findIndex((v) => v.id === Number(id))
      );
      render();
    });
  });
};

render();
