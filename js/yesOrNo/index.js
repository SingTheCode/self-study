function $(eventDom) {
  return document.querySelector(eventDom);
}

const changeHandler = (e) => {
  axios.get("https://yesno.wtf/api").then((response) => {
    const { data } = response;
    console.log(data);
    $(".answer").innerText = data.answer;
    $(".answer-image").src = data.image;
  });
};

$("#question").addEventListener("click", changeHandler);
