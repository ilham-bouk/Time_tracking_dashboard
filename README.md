# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help improve coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![screenshot of the solution](./design/SolutionScreenshot.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/time-tracking-dashboard-Hh_Kk3Wmw8)
- Live Site URL: [Live site](https://ilham-bouk.github.io/Time_tracking_dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript 
- Flexbox
- CSS Grid
- Fetch JSON data 

### What I learned

```js
ulLis.forEach((li) => {
  li.onclick = function () {
    ulLis.forEach((liRemov) => liRemov.classList.remove("active"));
    timeFrame = li.className;
    li.classList.add("active");

    section.innerHTML = "";

    getData();
  }
})
```

### Continued development


### Useful resources


## Author

- Frontend Mentor - [@ilham-bouk](https://www.frontendmentor.io/profile/ilham-bouk)
- LinkedIn - [Ilham Bouktir](https://www.linkedin.com/in/ilham-bouktir-0b266b31b)

## Acknowledgments

A big thank you to anyone providing feedback on [my solution](https://www.frontendmentor.io/solutions/time-tracking-dashboard-Hh_Kk3Wmw8). It definitely helps to find new ways to code and find easier solutions!

**Happy coding!** ☺️🚀
