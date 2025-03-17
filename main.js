let ulLis = document.querySelectorAll("ul li");
let section = document.querySelector("section");
let timeFrame = "weekly";

getData();

ulLis.forEach((li) => {
  li.onclick = function () {
    // what I learn
    ulLis.forEach((liRemov) => liRemov.classList.remove("active"));
    timeFrame = li.className;
    li.classList.add("active");

    section.innerHTML = "";

    getData();
  }
})

function getData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((response) => {
      createArt(response, response.length);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function createArt(arr, count) {
  for (let i = 0; i < count; i++) {
    let art = document.createElement("article");
    art.classList.add(`${arr[i].artClass}`);

    let cart = document.createElement("div");
    cart.classList.add(`cart`);

    let title = document.createElement("div");
    title.classList.add(`title`);

    let titleSpan = document.createElement("span");
    titleSpan.innerHTML = arr[i].title;
    let titleImg = document.createElement("img");
    titleImg.src = "./images/icon-ellipsis.svg";
    titleImg.alt = "icon-ellipsis";
    
    title.appendChild(titleSpan);
    title.appendChild(titleImg);
    cart.appendChild(title);
    
    let time = document.createElement("div");
    time.classList.add(`time`);
    
    let currTime = document.createElement("h2");
    currTime.innerHTML = `${arr[i].timeframes[timeFrame].current}hrs`;
    
    let prevTime = document.createElement("p");
    if (timeFrame == "daily") {
      prevTime.innerHTML = `Previous - ${arr[i].timeframes[timeFrame].previous}hrs`;
    } else if (timeFrame == "weekly") {
      prevTime.innerHTML = `Last Week - ${arr[i].timeframes[timeFrame].previous}hrs`;
    } else if (timeFrame == "monthly") {
      prevTime.innerHTML = `Last Month - ${arr[i].timeframes[timeFrame].previous}hrs`;
    }
    
    time.appendChild(currTime);
    time.appendChild(prevTime);
    cart.appendChild(time);

    art.appendChild(cart);
    section.appendChild(art);
  }
}
