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

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid, e.g. 31/04/1991 (there are 30 days in April)
  - View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./src/Components/Images/Screenshot%20Age%20Calculator%20App.png)

### Links

- Live Site URL: [Add live site URL here](https://cesars-age-calculator.netlify.app/)

## My process

I started creating this App by Breaking the UI into a component hierarchy, I wanted to have a general idea of how components relate to each other, then I Built a static Version of the App using those components and style them with CSS3.

I then use the React Hook Form library in order to handle the logic between inputs, I found this library very useful in order to render the solution and It provides the tools to manage input validation, and handle errors as well.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- [React](https://reactjs.org/) - JS library
- [React Hook Form](https://react-hook-form.com/) - React Hook Form

### What I learned

I am getting familiar with the environment React JS offers, and I would like to share some concepts that I found interesting:

- Using React hook form, React Hook Form is a library for managing form state and validation in React applications using hooks. It provides a simple and efficient way to handle form logic without the need for complex state management or class components.

The following code excerpt demonstrates a basic usage example:

```jsx
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}
```
