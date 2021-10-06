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
scrollLeft();

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

console.log(await Fetch("./api/info/info"));
