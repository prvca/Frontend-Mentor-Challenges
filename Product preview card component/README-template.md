# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Mobile view screenshot](/images/completed-mobile-view-screenshot.png)
![Desktop view screenshot](/images/completed-desktop-view-screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://prvca.github.io/Frontend-Mentor-Challenges/Product%20preview%20card%20component/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- SCSS variables
- Flexbox
- Mobile-first workflow

### What I learned

1. I learned how important it is to use box-sizing border-box, particularly trying to set the card image and the card content to be the same width.

```css 
html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
}
```

2. I learned I could use the <picture> element to display a different image based on the screen breakpoints. That way I could show image-product-mobile.jpg for the mobile view and image-product.desktop.jpg for the desktop view.

``` html
<picture>
  <source 
    srcset="images/image-product-desktop.jpg"
    media="(min-width: 1024px)"
  />
  <img
    src="images/image-product-mobile.jpg"
    alt="Perfume bottle"
    class="product-card__img"
  />
</picture>
```

### Continued development

- I want to continue working on the BEM naming convention. 
- Learn how to organize CSS better, using partials.
- Learn mixins.

### Useful resources

- [CSS-Tricks](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-picture) - This article explained <picture> and how to use it.
- [Bunny Fonts](https://fonts.bunny.net/) - Used this website for fonts as an alternative to Google Fonts.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@prvca](https://www.frontendmentor.io/profile/prvca)

