import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import axios from "axios";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

let data = JSON.stringify({
  ContactKey: "taiht221@gmail.com",
  EventDefinitionKey: "APIEvent-aef78d60-cf09-ea68-795c-19da9ac7c44d",
  Data: {
    firstname: "Eddie",
    lastname: "Huynh",
    email: "taiht221@gmail.com",
    mobile: "0969045051",
    eventdate: "2024-04-03",
  },
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://mcjz-zzh06y0vtm1d9233s4dj288.rest.marketingcloudapis.com/interaction/v1/events",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
