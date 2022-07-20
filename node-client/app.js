import express from "express";
import fetch from "node-fetch";

import template from "./template.js";
import QuizList from "./pages/QuizListPage.js";
import SignInPage from "./pages/SignInPage.js";

const app = express();
const port = 3000;

app.use("/", express.static("./"));

app.get("/quizlist", (req, res) => {
  fetch("http://localhost:8080/quiz", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(template(QuizList(data)));
    });
});

app.get("/signin", (req, res) => {
  res.send(template(SignInPage()));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
