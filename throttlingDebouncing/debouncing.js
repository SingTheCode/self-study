var timer;
document.querySelector("#input").addEventListener("input", function (e) {
  // 아직 타이머 수행되지 않았으면(직전 입력으로부터 200ms가 지나지 않았다면) 타이머 취소
  // (타이머가 존재하면, 즉 직전 입력에서 타이머를 생성했다면)
  if (timer) {
    clearTimeout(timer);
  }
  // 타이머 설정
  timer = setTimeout(function () {
    console.log(`api 요청 : ${e.target.value}`);
  }, 2000);
});
