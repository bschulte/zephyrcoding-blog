---
title: Javascript Basics 5 - Loops and Conditionals
date: "2017-11-25T20:54:17.776Z"
---

Loops are the way in Javascript that we iterate over data or keep doing a certain task until a particular condition is met. As with all our other lessons, let's take a look at some code first to get a better idea of what's going on:

## For loop

```js
// Section 1      2      3
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

`for` is the keyword we use to start off what we call a for loop. A for loop repeats the code inside of the '{}'s a pre-determined number of times. For loop declarations consist of 3 parts, each separated
by a ';'.

**Section 1**: creates a new variable to be used inside the loop for keeping track of what iteration of the loop we're on. This can technically be any number, but most commonly it will be either '0' or '1'.

**Section 2**: declares the condition when we want to stop the loop. There are a number of conditions that can be used in a for loop to dictate when we want the loop to stop executing. This conditional is evaluate
d to determine if it's true or not, and if it is false, then the loop is complete and execution resumes at the code after the loop.

**Section 3**: declares how much we want to increment our counter by each time the loop completes. In most cases with for loops you'll want to just increment the counter by one each time. `i++` is shorthand for writing `i = i+1` which will just increment `i`.

Newer versions of javascript have given us some convenient loops to use if we want to iterate over an object or array. Let's take a look at what I'm talking about:

```js
var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
for (var day of days) {
  console.log(day)
}
```

This example takes our array of days and iterates over each value inside the array. `for (var day of days)` is a special type of for loop that runs once for each element in the array. We declare a variable inside the loop declaration (`var day`) that can be referenced inside the loop's code. `day` will reference each individual element of the array as it loops through, so in this case it will print out 'Sunday', then 'Monday', then 'Tuesday', and so on and so forth. You can actually use this type of loop on other data types, but for now you'll mainly be using it on arrays.

```js
var car = { make: 'Ford', model: 'F-150', isUsed: true, mileage: 103874 }

for (var key in car) {
  console.log(car[key])
}
```

The `for (var key in car)` loop gives us a way to loop over all the properties of the object. Notice how we use `in` instead of `of` during the loop declaration. The variable we're declaring for our loop, `key`, will contain the name of each key of the object as it iterates through it. We can then reference the _value_ of the property using: `car[key]`. Notice the use of the '[]'s instead of the '.' for accessing the properties value. If you'll recall in our last lesson this lets us access a key name of the object which is stored in a variable. If we tried to do `car.key` that would try to look up a property named 'key' on the object, which of course doesn't exist.

## While loop

Another type of loop that simply waits for a condition to not be true is the while loop:

```js
while (i < 10) {
  console.log(i) i += 3
}
```

The while loop is declared by the keyword `while` followed by the condition the loop should check to see if the loop has finished or not. In this case, we're checking to see if the variable `i` is less than 10. Inside the loop, all we're doing is printing out the value of `i` and then adding 3 to it's current value.

In our example loop the iterations will look like this:

1.  i = 0 and '0' is printed to the console
2.  i = 3 and '3' is printed to the console
3.  i = 6 and '6' is printed to the console
4.  i = 9 and '9' is printed to the console
5.  i = 12 and the expression `i < 10` is no longer true so the code inside the loop is not executed

To be completely honest, I rarely use the while loop and almost always end up going with the for loop.

## The If statement

```js
var x = 3
if (x > 3) {
  console.log('x is greater than 3')
} else if (x < 3) {
  console.log('x is not greater than 3')
} else {
  console.log('x is equal to 3!')
}
```

Our if statement is constructed with the keyword `if` followed by the conditional to check surrounded by '()'s. After the statement '{}'s enclose the code that will run if the conditional is true. An optional `else` keyword can come after the closing bracket of code for the if statement that will be followed by it's own code in '{}'s. This block of code will be run if the conditional is not true.

As you can see in the example, if statements can also be chained together to check for one thing and then another. In this example we're first checking to see if x is greater than 3, then we're checking if x is less than 3, and finally the last else statement prints out 'x is equal to 3' since we checked if it was greater than or less than already.

Conditionals can also be compound statements checking for multiple things. Consider this code:

```js
var a = 2
var b = 6
if (a > 1) {
  if (b > 4) {
    console.log('a is greater than 1 and b is greater than 4')
  }
}
```

This code will work, but there is a more readable way to write it:

```js
if (a > 1 && b > 4) {
  console.log('a is greater than 1 and b is greater than 4')
}
```

In this if statement, we're checking both of the conditions in the same line. The `&&` is the _and_ operator and says that we want to make sure that the conditionals to the left and right of the operator are both true. We can also use the _or_ operator, `||` to check if either conditional is true:

```js
if (a > 1 || b > 4) {
  console.log('either a is greater than 1, or b is greater than 4')
}
```

Take note that with to or operator only one of the conditions needs to be true to execute the code inside the if statement block.

## Checking for a false value

Say that we want to check to see that something is actually false, not true with an if statement. For this, we can use the _not_ operator (`!`):

```js
var testStr = 'testString'
if (!testStr.includes('searchStr')) {
  console.log('Our test string does not include the substring: searchStr')
}
```

`.includes()` is a new(ish) function in Javascript that will check if a string contains another string. In this case, we're using the function to see if the substring 'searchStr' is inside of our `testStr` variable. Since we're using the not operator, the if statement's code block is going to be executed if `testStr` does not contain the substring 'searchStr'. Since that is the case in our example, the code block is executed and the console log statement is printed.

One thing to keep in mind with the not operator is what the actual `!` is being applied to.

```js
if (!a > 3) {
  console.log('this is not going to work how we want it to')
}

if (!(a > 3)) {
  console.log('This is properly checking if a is *not* greater than 3')
}
```

'()'s play an important part when using the not operator. In the first if statement, what is actually being done by Javascript is it will evaluate the `!a` part and then check to see if that result is grea
ter than 3, which is not what we were trying to do. By using the '()'s in the second if statement, the `a > 3` condition will be evaluated first and then the not operator will be applied.

## Conditionals

Conditionals are an important part of Javascript or any programming language. They are statements that get evaluated to either true or false and based on the result and where they are used certain actions are taken. In the case of the for loop that we've been talking about, if the conditional in section 2 of the for loop declaration is false, the loop is exited. The list of conditionals we have to use is:

* `a < b`: checks to see if a is less than b
* `a <= b`: checks to see if a is less than or equal to b
* `a > b`: checks to see if a is greater than b
* `a >= b`: checks to see if a is greater than or equal to b
* `a === b`: checks to see if a is equal to b
* `a !== b`: checks to see if a is not equal to b
