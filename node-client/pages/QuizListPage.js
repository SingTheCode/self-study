export default function QuizListPage(quizListData) {
  return `
    <h1>퀴즈의 목록들을 보자!</h1>
    <ul>
    ${quizListData
      .map((quiz) => {
        return `<li>${quiz.value}</li>`;
      })
      .join("")}
    </ul>
  `;
}
