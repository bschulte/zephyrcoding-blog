---
title: Javascript Basics 3 - Functions
date: "2017-11-23T20:54:17.776Z"
---

Functions in Javascript are the things that make everything happen in Javascript and it could be argued that functions are the most important part of the language. Functions are just pieces of code that perform a specific set of task(s). Functions can take in a data as well that are relevant to the task the function needs to perform. Also, functions typically return something at the end of execution. Let's take a look at some actual code examples so this can all start to make a bit more sense.

```js
function add(a, b) {
  var c = a + b return c
}
var result = add(2, 3) // Result will equal 5
```

Let's take a look at our function declaration. A function declaration just tells Javascript that we want to create a new function that executes our code that we include in it.

```js
function
```

This is the keyword we use to tell Javascript that a function declaration is coming up next in the code.

```js
add(a, b)
```

This is what we call a function's signature. add is the name of the function that we're declaring. What's inside the parenthesis are what we call the function parameters. Functions parameters are the data that we give to the function to reference during it's execution. In this case we're passing in two values called a and b. In Javascript things are pretty lenient about declaring what type of data (string, number, boolean, etc...) we're using so we don't have to tell the function what data types a and b are. Due to this behavior, it's useful to make comments at the top of your functions to remind you about what the function is doing and what the data being passed in is.

For this function, we're passing in two numbers, a and b. Inside of the function we add these two values together and store the result in the variable c. After that, the variable c is returned. After the function add is completed, the result of that function call (the function add's variable c) is stored in the result variable.

Functions can be ones that we declare ourselves, or you can use functions declared by Javascript (the browser) or third party libraries. Let's take a look at a couple examples:

## Built-in functions

```js
console.log('Testing!')
```

We saw a call to the `console.log` function in a previous example, so let's talk about what it actually means. console is an object (we'll talk about these in a bit) that gives us access to the browser's debugging console. log is a function that 'belongs' to the object console. The '.' operator allows us to get access to properties of an object, in this case the log function. The log functions takes data that you want to output to the browser's debugging console.

```js
Math.sqrt(4)
```

Math is another built-in global object available to us that to use anywhere in our code. It provides a bunch of mathematical functions for us to use. This function, **sqrt**, takes in a number and returns the square root of it.

## Functions as variables

One very important thing to know about functions in Javascript is that they can be declared and passed around like any other variable. Reading it that might not make much sense, but let's take a look at some examples to see what I'm talking about:

```js
var add = function(a, b) {
  return a + b
}
console.log(add(1, 2))

var caller = function(func, a, b) {
  return func(a, b)
}
console.log(caller(add, 1, 2))
```

Let's break this down. On line one, we declare a function that is stored in the variable add. We can call this function like would any normal function by having a '(' after the variable name that's storing the function followed by the parameters for that function and the closing ')'. This is shown in the `console.log` call on line 4. On that line we're calling the add function with the parameters '1' and '2'.

Then on line 6 we declare a new function and store it in the variable caller. This function takes in three parameters: func which in this case is a function, along with a and b which are both numbers. Like I mentioned before, we can pass around functions just like we would any other variable. The easy way to think about it is that if we reference the variable name containing the function with '()'s, then we're calling that function. If we just use the variable name itself, we're only talking about the reference to the function. Knowing that, we take a look at line 10 where we pass the function add as a function parameter to the function caller. Then in the caller function on line 7, we call that actual function since we write it with the '()'s containing the parameters.

This might take a while to wrap your head totally around, but I promise that once you do your coding life with Javascript will become a lot easier.

## Looking up functions

These examples are all well and good, but how in the world do we even know that they're there? If you're using code from a third party library such as a super popular one called [Lodash](https://lodash.com/), they usually have [documentation](https://lodash.com/docs/4.17.4) on their site that details what functions they provide and how to use them.

For any built in functions, or information about the Javascript language in general, the [Mozilla Developer's Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is a great resource for looking things up. [Here's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) an example of the documentation for the **Math.sqrt** function we just covered.

When all else fails, Google will be your best friend. This will become a skill, and an incredibly important one, in and of itself. A lot of the time a website called [Stack Overflow](https://stackoverflow.com) will come up. This is a wondrous site where developers of all experience levels can ask questions to get answers to problems they've run into or questions they have.

## What's next?

There is about a thousand other nuances about functions that we could cover here, but that'll have to wait for another lesson. In the next lesson we'll talk about the two important data structures in Javascript: **arrays** and **objects**.
