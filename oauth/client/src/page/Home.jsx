import React from "react";

export default function Home() {
  const loginUri = `https://github.com/login/oauth/authorize?client_id=0689a230fcfe3cafeb80&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback`;

  const naverUri = "https://www.naver.com";
  return (
    <>
      <h1>Home</h1>
      <a href={loginUri}>go to github login</a>
    </>
  );
}
