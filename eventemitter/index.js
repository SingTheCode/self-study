const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("messageLogged", (name) => {
  console.log(name + "이 로그인 했습니다.");
});

emitter.emit("messageLogged", "socratone");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  hello() {
    this.on("log", (context) => console.log(context));
  }
}

const myEmitter = new MyEmitter();

myEmitter.hello();
myEmitter.emit("log", "hello");
