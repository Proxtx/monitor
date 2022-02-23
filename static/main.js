const server = await load("info.js");

const data = ["cpu", "ram", "cores", "userName", "osName", "uptime"];
let elements = [];

data.forEach((value) => {
  elements.push(document.getElementById(value));
});

const updateStatsLoop = async () => {
  data.forEach(async (value, index) => {
    elements[index].innerText = await server[value](cookie.pwd);
  });
  window.setTimeout(updateStatsLoop, 3000);
};

window.openService = async () => {
  window.open(await server.serviceLink);
};

window.openService = openService;

updateStatsLoop();
