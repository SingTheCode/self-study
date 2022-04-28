const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

const syncf = async (content, time) => {
  await delay(time)
    .then(() => console.log(content));
}

const asyncf = (content, time) => {
  setTimeout(() => console.log(content), time);
}

syncf("first", 1000);
asyncf("second", 1000);