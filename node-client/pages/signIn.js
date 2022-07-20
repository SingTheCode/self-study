const nameInput = document.querySelector("#name");
const pwInput = document.querySelector("#pw");
const signIn = document.querySelector("#submit");

let signInData;
function signInHandler() {
  signInData = {
    name: nameInput.value,
    pw: pwInput.value,
  };
  console.log(signInData);
  fetch("http://localhost:8080/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInData),
  });
}

signIn.addEventListener("click", signInHandler);
