## Table of contents

- [Overview](#overview)
  - 
 
  - [Links](#links)
  - [Setup](#setup)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size :heavy_check_mark:
- See hover states for all interactive elements on the page :heavy_check_mark:



### Links

[Live Site URL](https://www.dpdzero.com/)

### Setup

To run this project locally:

```
yarn && yarn dev
```

or

```
npm install && npm run dev
```

## My process

### Built with

- React
- Asto
- React
- React-Hook-Form
- Framer-Motion
- TypeScript
- Mobile-first workflow

### What I learned

#### Astro

For this project I What is Astro?
Astro is an all-in-one web framework for building fast, content-focused websites.

## Key Features
-Section titled Key Features
-Component Islands: A new web architecture for building faster websites.
-Server-first API design: Move expensive hydration off of your users’ devices.
-Zero JS, by default: No JavaScript runtime overhead to slow you down.
-Edge-ready: Deploy anywhere, even a global edge runtime like Deno or Cloudflare.
-Customizable: Tailwind, MDX, and 100+ other integrations to choose from.
-UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and more.

### Tailwind CSS
- it provides default breakpoints: base, sm: "30em", md: "48em", lg: "62em" (you can customize them and add more),
- under hood it uses @media(min-width) media query to ensure interfaces are mobile-first.
- it makes responsive styles really easy to do with the way how you define media queries, as an object or array:

```js
    <Stack
      as="ul"
      spacing={{ base: '1rem', md: '2.125rem' }}
      direction={{ base: 'column', sm: 'row' }}
    >
```

Here 'base' means this style will apply when viewport width is from 0em to 30em (mobile), 'sm' will apply to tablet and higher and so on. You can read more in their [documentation](https://chakra-ui.com/docs/features/responsive-styles).

The "as" prop that you see above is also very useful and similarly like in Styled-Components .

## React
# A JavaScript library for building user interfaces
Declarative
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.


Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Create unit and integration tests with Jest/React-Testing-Library.

Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.

##React Docs: https://react.dev/blog/2023/03/16/introducing-react-dev

## What I Learned:
--- I learned how to use Tailwind css
--- I learned how to convert design to code
--- I learned to mobile view for the website
## Author
dpdzero
