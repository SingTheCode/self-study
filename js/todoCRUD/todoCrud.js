const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const clickHandler = (e) => {
  e.preventDefault();
  const content = input.value;
  if (content.trim()) {
    const li = document.createElement("li");
    li.innerText = content;
    ul.appendChild(li);

    const checkDone = (e) => {
      e.target.classList.toggle("done");
    };

    li.addEventListener("click", checkDone);
    return;
  }
  alert("할 일이 입력되지 않았어요!");
};

button.addEventListener("click", clickHandler);
