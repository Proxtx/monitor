import { componentObj } from "./f_xHtml/xHtml.js";

let isPwd = window.localStorage.getItem("pwd") ? true : false;

let pwd = isPwd ? window.localStorage.getItem("pwd") : "pwd";

let scroll = [
  document.getElementById("logon"),
  document.getElementById("main"),
];

let scrolled = 0;

function initScroll() {
  for (let i in scroll) {
    scroll[i].style.left = i * 100 + "%";
  }
}

function scrollLeft() {
  scrolled++;
  for (let i in scroll) {
    scroll[i].style.left = (scrolled - Number(i)) * -100 + "%";
  }
}

initScroll();

const Fetch = async (url, json = {}) => {
  return await (
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

async function updateStatsLoop() {
  componentObj.watcher.replace(await apiRequest());
  window.setTimeout(updateStatsLoop, 3000);
}

async function apiRequest() {
  return await Fetch("./api/info/info", { pwd });
}

let password = document.getElementById("password");
password.addEventListener("keyup", async (e) => {
  if (e.key == "Enter") {
    pwd = password.value;
    if ((await apiRequest()).success) {
      window.localStorage.setItem("pwd", pwd);
      await updateStatsLoop();
      scrollLeft();
    }
  }
});

let serviceLink = (await Fetch("./api/info/serviceLink")).link;

function openService() {
  window.open(serviceLink);
}

window.openService = openService;

if (isPwd) {
  if ((await apiRequest()).success) {
    await updateStatsLoop();
    scrollLeft();
  }
}
