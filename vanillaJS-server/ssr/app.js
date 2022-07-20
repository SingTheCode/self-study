import express from "express";
// import { TodoList } from "./src/components.js";
// import { render } from "./src/render.js";
import { App } from "./src/components.js";
import { serverRenderer } from "./src/ServerRenderer.js";

const app = express();

// app.get("/", (req, res) => {
//   res.send(render(TodoList()));
// });

app.use("/src", express.static("./src"));

// path가 `/`에서 `/*`로 변경되었습니다. 모든 route와 매칭하기 위함입니다.
app.get("/*", (req, res) => {
  res.send(
    serverRenderer(
      // 기존에는 TodoList만 렌더링했는데,
      // 이제 App 컴포넌트를 렌더링하도록 변경했습니다.
      App({
        path: req.path, // 렌더링을 할 때 path 정보를 같이 보냅니다.
      })
    )
  );
});

app.listen(3000, () => {
  console.log("listen to http://localhost:3000");
});
