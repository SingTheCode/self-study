var timer;
document.querySelector("#input").addEventListener("input", function (e) {
  // 타이머가 없을 때만 타이머 설정.
  // 만약 200ms가 지나서 해당 함수를 실행하면 타이머는 사라진다. (timer = null)
  // 만약 타이머 설정 후 200ms가 지나지 않았다면 아무 일도 일어나지 않는다.
  // 따라서 최소 200ms 마다 한번씩만 아래의 코드가 실행된다.
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      console.log(`api 요청 : ${e.target.value}`);
    }, 2000);
  }
});
