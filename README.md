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

## solution 
Here’s the modified version of your code, updated to work as intended. I’ve made several improvements to ensure the dashboard updates dynamically when a timeframe is selected (e.g., daily, weekly, monthly). Below is the complete code with explanations of the changes:

---

### Updated Code

```javascript
let ulLis = document.querySelectorAll("ul li");
let section = document.querySelector("section");
let timeFrame = "weekly"; // Default timeframe

console.log(ulLis);
console.log(section);

// Initial data fetch and render
getData();

ulLis.forEach((li) => {
  li.addEventListener("click", function () {
    // Remove 'active' class from all list items
    ulLis.forEach((liRemov) => liRemov.classList.remove("active"));
    
    // Set the new timeframe based on the clicked li's data attribute
    timeFrame = li.getAttribute("data-timeframe");
    
    // Add 'active' class to the clicked li
    li.classList.add("active");
    
    // Clear existing articles in the section
    section.innerHTML = "";
    
    // Fetch and render new data for the selected timeframe
    getData();
  });
});

function getData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((response) => {
      createArt(response, response.length);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function createArt(arr, count) {
  console.log(arr);
  console.log(count);
  console.log(timeFrame);

  for (let i = 0; i < count; i++) {
    let art = document.createElement("article");
    art.classList.add(arr[i].artClass); // Use artClass from data

    let cart = document.createElement("div");
    cart.classList.add("cart");

    let title = document.createElement("div");
    title.classList.add("title");

    let titleSpan = document.createElement("span");
    titleSpan.innerHTML = arr[i].title;
    let titleImg = document.createElement("img");
    titleImg.src = "./images/icon-ellipsis.svg";
    titleImg.alt = "icon-ellipsis";
    
    title.appendChild(titleSpan);
    title.appendChild(titleImg);
    cart.appendChild(title);
    
    let time = document.createElement("div");
    time.classList.add("time");
    
    let currTime = document.createElement("h2");
    currTime.innerHTML = `${arr[i].timeframes[timeFrame].current}hrs`;
    let prevTime = document.createElement("p");
    prevTime.innerHTML = `Previous - ${arr[i].timeframes[timeFrame].previous}hrs`;

    time.appendChild(currTime);
    time.appendChild(prevTime);
    cart.appendChild(time);

    art.appendChild(cart);
    section.appendChild(art);
  }
}
```

---

### Key Changes and Explanations

#### 1. **Improved Event Handling**
- **Old**: `li.onclick = function () { ... }`
- **New**: `li.addEventListener("click", function () { ... })`
- **Why**: Using `addEventListener` is a better practice because it allows multiple listeners if needed and is more flexible than directly assigning to `onclick`.

#### 2. **Timeframe Selection**
- **Old**: `timeFrame = li.className`
- **New**: `timeFrame = li.getAttribute("data-timeframe")`
- **Why**: Using `li.className` could include unintended classes (e.g., `active` or other styling classes). Instead, I assume each `<li>` has a `data-timeframe` attribute (e.g., `data-timeframe="daily"`) to clearly specify the timeframe. This is more reliable and intentional.

#### 3. **Clearing Existing Content**
- **Old**: You had a commented-out loop to remove children manually.
- **New**: `section.innerHTML = ""`
- **Why**: This clears all existing articles in the `<section>` before rendering new ones, ensuring the dashboard shows only the data for the selected timeframe. It’s simpler and more efficient than removing elements one by one.

#### 4. **Error Handling in Fetch**
- **Old**: No error handling for the `fetch` call.
- **New**: Added `.catch((error) => console.error("Error fetching data:", error))`
- **Why**: This helps debug any issues with fetching the `data.json` file.

#### 5. **Article Class Assignment**
- **Old**: `art.classList.add(`${arr[i].artClass}`)`
- **New**: `art.classList.add(arr[i].artClass)`
- **Why**: Removed unnecessary template literal since `arr[i].artClass` is already a string (assuming your JSON includes an `artClass` property like `"work"`, `"play"`, etc.).

---

### Example HTML
To make this code work, your HTML should include `data-timeframe` attributes on the `<li>` elements. Here’s an example:

```html
<ul>
  <li data-timeframe="daily">Daily</li>
  <li data-timeframe="weekly" class="active">Weekly</li>
  <li data-timeframe="monthly">Monthly</li>
</ul>
<section></section>
```

- The `<li>` with `class="active"` will be the default highlighted option (weekly in this case).
- The `data-timeframe` attribute determines what data is shown when clicked.

---

### Expected JSON Structure
The code assumes your `data.json` file has a structure like this:

```json
[
  {
    "title": "Work",
    "artClass": "work",
    "timeframes": {
      "daily": { "current": 5, "previous": 7 },
      "weekly": { "current": 32, "previous": 36 },
      "monthly": { "current": 103, "previous": 128 }
    }
  },
  {
    "title": "Play",
    "artClass": "play",
    "timeframes": {
      "daily": { "current": 1, "previous": 2 },
      "weekly": { "current": 10, "previous": 8 },
      "monthly": { "current": 23, "previous": 29 }
    }
  }
]
```

- `title`: The name of the activity (e.g., "Work").
- `artClass`: The class for styling the `<article>` (e.g., "work").
- `timeframes`: An object with `daily`, `weekly`, and `monthly` data, each containing `current` and `previous` hours.

---

### How It Works
1. **On Page Load**: 
   - The `weekly` timeframe is set as default, and `getData()` fetches and renders the initial data.
2. **On Click**: 
   - Clicking an `<li>` updates `timeFrame`, clears the `<section>`, and fetches/renders new data based on the selected timeframe.
   - The `active` class highlights the clicked `<li>`.
3. **Rendering**: 
   - The `createArt` function builds `<article>` elements dynamically using the data for the current `timeFrame`.

---

### Notes
- **Styling**: Add CSS to style the `.active` class (e.g., a different color or background) to visually indicate the selected timeframe.
- **Debugging**: The `console.log` statements help verify the data and elements. Remove them in production.
- **Assumptions**: If your JSON doesn’t include `artClass`, replace `arr[i].artClass` with a static class or derive it from `arr[i].title`.

This updated code should now work as a dynamic dashboard that updates based on the selected timeframe. Let me know if you need further tweaks! 

