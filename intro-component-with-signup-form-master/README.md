# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/mobile-design.jpg)
![](./design/active-states.jpg)


### Links

- Live Site URL: [Netlify](https://bright-frangollo-50aac3.netlify.app/)

## My process
started with html, then css, using a mobile-first approach. After I was satisfied I created the javascript logic to add event listeners when the input was not in focus. Lastly, I went above and beyond the requirements by giving the user feedback when the form was submitted by providing a redirect to a result page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I learned how to handle form inputs as well as javascript to add event listeners to each element. I also learned how to use the array foreach 

### Continued development
so one thing i was not satisfied was with how i approached the feedback for the player once the form was submitted. I used a get method instead of post because the post lead to an error, not sure why. But in the get, i noticed that all the user's info was pasted in the url - including the password. So for the future i wanna know how to handle with post request through html, that way i can make the user's info safe and still provide a feedback to them.
## Author

- Website - [My portfolio](https://santiagomorales.netlify.app/)
- Frontend Mentor - [@aleroms](https://www.frontendmentor.io/profile/aleroms)
