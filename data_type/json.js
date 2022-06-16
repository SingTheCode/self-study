const data = {
  movieId: 2,
  posterUrl: "dfjasoifwjefasjf.jpg",
}

<html>
<body>
<img src={data.posterUrl}>
</body>
</html>

movieId: Number;
posterUrl: String;

// 피그마 기획 -> 노션 기획회의 요구사항을 최신화 -> api 명세를 작성

/영화목록

- 목록 읽기, 수정

GET 방식으로 목록 읽기, 수정
/movielist/update => GET  /movielist
/movielist/read => POST /movielist

json

서버에서 json파일로 송신
client에서 json 파일로 수신

json 파일 형식 알아야
server가 client한테 api 정보를 알려줍니다. => swagger api 문서 자동화 or 텍스트로 또는 구두로 공유(노션)
clien