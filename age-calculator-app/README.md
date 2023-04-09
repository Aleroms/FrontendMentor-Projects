# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./public/assets/desktop-completed.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
started building it as a wireframe and doing desktop view first (since it was only a small container). I worked in parallel doing css and html. I made the form and then I looked up how to validate with vee validate. Then i focused on the mobile version

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Vue](https://vuejs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to use an external library called VeeValidate. It was hard at first because I was just coding without worry, until I got an error `Failed to resolve component: v-form` it was because I did not realize that I had to manually import VeeValidate. So this code can be found inside `./includes/validation`.

### Continued development
I really want to work in understanding vue more and would wanna continue my projects in the composition api
### Useful resources

- [VeeValidate rules](https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules) - This helped me know how to import the correct rules.
## Author

- Website - [Santiago Morales](https://www.santiagomorales.netlify.app)
- Frontend Mentor - [@aleroms](https://www.frontendmentor.io/profile/aleroms)
