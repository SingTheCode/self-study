const axios = require("axios");

async function request(sub_path) {
  const url = "http://13.124.193.201:8844/" + sub_path;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    console.log(e);
  }
}

async function test() {
  const promise1 = await request("a");
  console.log(promise1);
  const promise2 = await request("b");
  console.log(promise2);
  const promise3 = await request("c");
  console.log(promise3);
  const promise4 = await request("d");
  console.log(promise4);
  const promise5 = await request("e");
  console.log(promise5);
}

test();
