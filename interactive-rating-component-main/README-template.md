# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Mobile View Screenshot](/images/CompletedMobileScreenshot.png)
![Desktop View Screenshot](/images/CompletedDeskopScreenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://prvca.github.io/Frontend-Mentor-Challenges/interactive-rating-component-main/](https://prvca.github.io/Frontend-Mentor-Challenges/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Flexbox
- Javascript

### What I learned

1. I learned how to style radio buttons and their corresponding labels to create the numbered buttons. It was a bit of a challenge! I first considered using button elements, but I learned it was not accessible. Instead, I learned I could style the radio button's label and hide the actual radio input itself.

```html
<div class="input-radio">
  <input type="radio" class="rate-btn" name="rating" id="1" value=1><label for="1">1</label>
</div>
```
```css
input[type=radio] {
  display: none;
  margin: 0;
}
```

2. I also learned you could not used the "required" attribute on an input that is hidden. Instead of using the "required" attribute, I created a function in javascript to validate my form to check if a radio input was selected.


## Author

- Frontend Mentor - [@prvca](https://www.frontendmentor.io/profile/prvca)
