# Time_tracking_dashboard

```js

let ulLis = document.querySelectorAll("ul li");
let section = document.querySelector("section");
let timeFrame = "weekly";

console.log(ulLis);
console.log(section);

getData();

ulLis.forEach((li) => {
  li.onclick = function () {
    console.log(li);
    // what I learn
    ulLis.forEach((liRemov) => liRemov.classList.remove("active"));
    timeFrame = li.className;
    li.classList.add("active");


    // if (section.children.length > 5) {
    //   for (let i = 0; i < 7; i++) {
    //     section.children[i].remove();
    //     console.log(i);
    //   } 
    // }
    // fitch data
    getData();

  }
  
  
})




function getData() {
  // console.log(li);
  fetch("./data.json")
    .then((response) => response.json())
    .then((response) => {
      createArt(response, response.length);
    })
}

function createArt(arr, count) {
  console.log(arr);
  console.log(count);
  console.log(timeFrame);

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
    prevTime.innerHTML = `Previous - ${arr[i].timeframes[timeFrame].previous}hrs`;

    time.appendChild(currTime);
    time.appendChild(prevTime);
    cart.appendChild(time);

    art.appendChild(cart);
    section.appendChild(art);


    //     <article class="work">
    //       <div class="cart">
    //         <div class="title">
    //           <span>Work</span>
    //           <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
    //         </div>
    //         <div class="time">
    //           <h2>5hrs</h2>
    //           <p>Previous - 7hrs</p>
    //         </div>
    //       </div>
    //     </article>
  }
}




// // Map timeframes to previous period labels
// const previousLabels = {
//   daily: 'Yesterday',
//   weekly: 'Last Week',
//   monthly: 'Last Month'
// };

// // Variable to store the fetched data
// let activitiesData;

// // Fetch data from JSON file
// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     activitiesData = data;
//     updateDashboard('weekly'); // Set default view to weekly
//   })
//   .catch(error => console.error('Error fetching data:', error));

// // Add event listeners to timeframe buttons
// const buttons = document.querySelectorAll('.timeframe-btn');
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const timeframe = button.dataset.timeframe;
//     updateDashboard(timeframe);
//     // Update active button state
//     buttons.forEach(btn => {
//       btn.classList.remove('active');
//       btn.setAttribute('aria-selected', 'false');
//     });
//     button.classList.add('active');
//     button.setAttribute('aria-selected', 'true');
//   });
// });

// // Function to update the dashboard based on selected timeframe
// function updateDashboard(timeframe) {
//   const activityCards = document.querySelectorAll('.activity-card');
//   activityCards.forEach(card => {
//     const activityTitle = card.dataset.activity;
//     const activityData = activitiesData.find(activity => 
//       activity.title.toLowerCase() === activityTitle
//     );
//     if (activityData) {
//       const currentTime = activityData.timeframes[timeframe].current;
//       const previousTime = activityData.timeframes[timeframe].previous;
//       const previousLabel = previousLabels[timeframe];
//       card.querySelector('.current-time').textContent = `${currentTime}hrs`;
//       card.querySelector('.previous-time').textContent = `${previousLabel} - ${previousTime}hrs`;
//     }
//   });
// }





//     .then((response) => response.json())
//     .then((response) => {
//     }).catch(error => console.error(error));
// })

```
