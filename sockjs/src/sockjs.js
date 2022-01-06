import SockJS from "sockjs-client";
import StompJS from "@stomp/stompjs";

const client = new StompJS.Client({
  brokerURL: "/api/ws",
  connectHeaders: {
    login: "user",
    passcode: "password",
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

client.onConnect = function (frame) {
  if (typeof WebSocket !== "function") {
    client.webSocketFactory = function () {
      return new SockJS("http://localhost:15674/stomp");
    };
  }
};

client.onStompError = function (frame) {
  console.log("broker reported error: " + frame.headers["message"]);
  console.log("Additional details: " + frame.body);
};

client.activate();

client.publish({
  destination: "topic/general",
  body: "Hello World",
  headers: { priority: "9" },
});
