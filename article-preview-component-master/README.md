# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./design/mobile-design.jpg)
![](./design/mobile-active-state.jpg)
![](./design/desktop-design.jpg)
![](./design/desktop-active-state.jpg)

### Links

- Live Site URL: [Netlify](https://storied-fudge-4be392.netlify.app/)

## My process
start with a mobile-first approach and then create the active states. Adapt the css for desktop then adapt the active state for desktop. Polish
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I learned that empty divs have no heights and in order to add height to a div you can specify using `min-height`. Simply using `height` is not sufficient.

### Continued development
I will continue to learn more jquery and understand how i could have improved. For know i have a question to ask myself in the future in case i reread this with more knowledge: did you figure out how to play certain effects i.e. `toggle()` but for only specific screen sizes. Like play `toggle()` for screens with `min-width: 768` but smaller screens play `slideToggle()`

### Useful resources

- [jQuery Documentation](https://learn.jquery.com/using-jquery-core/document-ready/) - this helped me look at other methods i could use for the effect i wanted.
## Author

- Website - [My website](https://santiagosites.netlify.app/)
- Frontend Mentor - [@aleroms](https://www.frontendmentor.io/profile/aleroms)
