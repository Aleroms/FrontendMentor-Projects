# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

### Screenshot

![](./public/assets/design/desktop-preview.jpg)

### Links

- Live Site URL: [Netlify](https://sage-croissant-c1a94d.netlify.app)

## My process

I started out with creating a vue project and importing frontendmentor project setup. Using a mobile-first approach I created components to disect the design. There was a lot of redoing when I found better ways to write code. And at times, I forgot to consider the desktop perspective, so I had to reformat the components and create new ones.

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Vue.js](https://vuejs.org/) - JS library
- [Sass](https://sass-lang.com/) - For styles

### What I learned

I learned through a slow approach how to use Vue.js in a project. It was good reusing code and making it D.R.Y (do not repeat yourself). Additionally, using packages from npm help, such as @vueuse/motion, which helped me create animations for components

To pass parameters to Vue's child component, one should use `prop-name=" "` and if the value is a variable inside `data()` one needs to bind it `:prop-name=" "`. Additionally, the parent component must specify that there exists a component with `component: {}` in the script tag. On the child component, it has to accept the parameter in its `props: []` field.

Another thing that I learned was how to insert images into vue. My main issue was related to image paths. They did not work. I resolved this by putting my image directory inside the `public` folder. That led to my second issue: at build time, I was getting a `[vite]: Rollup failed to resolve import "/assets/..." from "src/components/..."`. I googled the issue and the fix was to insert a `/` in front. The issue was about the images path, doing so resolved the issue.

### Continued development

Something I want to continue to do is learn how to use computed properties to make the website responsive. The only thing I did was create static variables in App's `data()`, but I want to see how I can make websites more responsive in other ways. I would also want to continue developing my vue skills. This project took me a while because I was stumbling over myself on Vue syntax, like how to use `props, component, ` and `data()`.

### Useful resources

- [@vueuse/motion](https://motion.vueuse.org/) - Declarative animation that is lightweight and easy to use.

## Author

- Website - [Portfolio](https://www.santiagomorales.netlify.app/)
- Frontend Mentor - [@aleroms](https://www.frontendmentor.io/profile/aleroms)

## Acknowledgments

- LearnVue - [reference on @vueuse/motion](https://www.youtube.com/watch?v=jRknsy851IM&list=PLpsaPg6okxgLohtaKCAkMxngdyqw6u2dS&index=1)
