const body = document.querySelector("body");
const mainP = document.querySelector(".app");

const clock = () => {
  const date = new Date();
  const hrs = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const now = `${hrs}:${min}`;

  const night = "17:30";
  const morning = "05:00";

  mainP.innerHTML = now;

  if (now >= night || now < morning) {
    body.style.backgroundColor = "#212f3d";
    mainP.classList.add("dark-mode");
  } else {
    body.style.backgroundColor = "#e2e2e2";
    mainP.classList.remove("dark-mode");
  }
};

setInterval(clock, 0);
