---
title: Javascript Basics 2 - Variables
date: "2017-11-22T20:54:17.776Z"
---

Variables are how we store and keep track of data in our program. Say that we want to keep track of a number and add another number to it. We would store that number in a variable and the result of adding the two numbers together in another variable. We can do all sorts of things with variables as you'll soon find out. Let's check out some actual code:

```javascript
var bestNumber = 3
var isBestCoder = true
var bestStr = 'This is a thing'
```

`var` is the keyword in Javascript that actually shows that you want to declare a variable. `var` tells the interpreter to create a new variable which is named by whatever comes after `var` and store something in it. The text coming after the '=' is what is stored in the variable.

In Javascript we have a couple different types of data. We have numbers (like 2, 1, or 48.3), booleans (either `true` or `false`) and strings (which are just a series of characters such as `'learning'` or `'coding'`). Numbers are written in code simply as they are, just the number. They can either be written as an integer or as a float, Javascript isn't too particular about that. Booleans represent one of two things: either a 'true' value or a 'false' value. We'll learn more about how these are used in later lessons. Strings are how we represent words and phrases in Javascript.

Now let's take a look at a couple of basic things we can do with these numbers and strings!
Numbers

With numbers we can do things related to everyone's favorite subject, math! Don't worry, nothing complicated here. Let's go over a couple of code samples:

```js
var a = 2
var b = 6
var w = a + b // 8
var x = a * b // 12
var y = a - b // -4
var z = b / a // 3
```

The `//`'s you see in the code are comments. Comments let us write things in code that are not actually run in the script. These are useful in writing down messages to ourselves and others that describe things we do in code. Everything on the same line after the `//` represents the comment. The comments here show what the output of ur operation is.

As you can see from the code, the main thing we can do with numbers is perform mathematics operations on them. There's a lot of other uses for them outside of just adding, subtracting, multiplying, and dividing numbers, but we'll get to that in later lessons.

## Strings

Strings are mainly used in code to represent a word or phrase. Let's take a look at doing some things we can do with strings:

```js
var str2 = 'string'
var str3 = str1 + str2 // 'beststring'
console.log(str3) // Prints 'beststring' to the console. This is a function which we'll take about in the next lesson
```

We can also 'add' strings together, but with strings it takes the two strings and concatenates, or joins together, the two strings. The other example shown here is us passing the the string variable `str3` to the `console.log` function.

## Naming Variables

Naming variables is a very important part of writing clean and understandable code. We want to choose names that accurately describe the variable to help make our code readable. Single letter variables like `a` or `y` are typically not good variable names. When we use multiple words to name a variable we use what we call 'camel casing'. With this naming convention we make the first word lowercase and each subsequent word uppercase like this: `descriptiveVariableName`.

---

## Words to Know

### Javascript Keywords

Keywords are words in Javascript that are interpreted in special ways. For instance `var` signifies that you want to declare a new variable. This means that you cannot name a variable or function 'var' since Javascript is expecting that word to mean something special. The same goes for all Javascript reserved words.

### Interpreter

Interpreter refers to whatever _thing_ is actually running the Javascript code. In our examples, the interpreter is Node JS. For Javascript in browsers, the interpreter is the Javascript engine that the browser uses.
