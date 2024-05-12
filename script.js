const img = document.querySelector("img")

const status = document.querySelector("#status");

const message = document.querySelector("#message");

const fetchDog = async () => {
  const res = await fetch("/httpDog.json");
  const dogData = await res.json();

  const randomNum = parseInt(Math.random() * dogData.HttpArray.length);

  const randomHttp = dogData.HttpArray[randomNum];

  img.src = `https://http.dog/${randomHttp.status}.jpg`;

  status.innerHTML = `<h2>${randomHttp.status}</h2>`;

  message.innerHTML = `<strong>${randomHttp.message}</strong>`;
};

fetchDog();

const btn = document.querySelector("button.btn");
btn.click = () => {
  btn.dispatchEvent(new Event("click"));
};

let interval = setInterval(btn.click, 5000);
btn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(btn.click, 5000);
  fetchDog();
});
