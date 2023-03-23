let img = document.getElementById("img").childNodes[0];

let status = document.getElementById("status");

let message = document.getElementById("message");

const fetchDog = async () => {

    let dogData = await fetch("/httpDog.json").then((value) => value.json());

    let randomNum = parseInt(Math.random() * 72);

    // console.log(randomNum);

    let randomHttp = dogData.HttpArray[randomNum];

    img.src = `https://http.dog/${randomHttp.status}.jpg`;
    
    status.innerHTML = `<h2>${randomHttp.status}</h2>`

    message.innerHTML = `<strong>${randomHttp.message}</strong>`

};

fetchDog();

