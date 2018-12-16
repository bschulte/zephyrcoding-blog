---
title: Javascript Basics 4 - Objects and Arrays
date: "2017-11-24T20:54:17.776Z"
---

Objects and arrays are the main data structures that you will be using in code and are each useful in a wide variety of situations. They are insanely flexible and you'll find yourself using both of these data structures.

## Arrays

Arrays contain a list of items inside of code. Say you want to keep track of a number of strings that represent the dates of the week:

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
console.log(days[0])

days.push('AnotherDay')
console.log(days[7])
```

Line 1 creates an array called days which holds strings that represent the days of the week. So how do we access this data once we have it? With arrays, we access their individual values through an index of the array. This index is a number which starts at 0 and references which element, in order, of the array that we want to access.

Notice the '[]'s next to the variable name days on line 1 with a number inside of them. That is how we tell Javascript which element of the array we want to access. It's very important that we remember that array indexes start at '0' since it's easy to forget and then be off by one when trying to access a value.

So we have an array of some data, what if we want to add something to it? Javascript makes this very easy as we can see on line number 4. Each array that's created has functions available to it and one of them is the push function. This function takes a new element as a parameter and adds it to the end of the array. On line number 5 it'll print out AnotherDay to the console since it was added to the end of our existing array at index 7 (the 8th element of the array).

Arrays can contain any type of Javascript data including string, numbers, booleans, objects, other array, or even functions. While you can technically mix and match types in arrays, I would highly recommend you stick to one type of data for each array you create.

## Objects

Objects are data structures that are made up of key:value pairs. Let's take a look at an example of an object to get a better idea of what they are and their use:

```js
var car = {
  make: 'Ford',
  model: 'F-150',
  isUsed: true,
  mileage: 103874,
  honk: function() {
    console.log('HONK!')
  },
  pastOwners: ['Jane', 'John', 'Sam'],
  seller: { name: 'James', company: 'Ford Co' }
}
```

OK, that's a lot to digest, let's start breaking it down. First things first, how do we access data in an object? Like we've seen in previous lessons with functions, we use the '.' operator to access data like this: `car.make`. As an alternative, we can use '[]'s with a key name to reference that key's value like so: `car['make']`. This particularly comes in handy when the key name you want to reference from an object is stored in a variable. This way, you can pass the variable name inside the '[]'s. If we tried to do object.variableName then it would actually try to get a property of the object called 'variableName', which isn't what we're aiming for. Let's look at what that would look like when we're trying to reference a key from our car object:

```js
var keyName = 'make'
console.log(car[keyName]) // Prints out 'Ford'
```

If we ever need to reference an object key who's name is stored in a variable, we can do it this way.

In order to add a property to an object or change a current property it's very similar to how we reference an object's property, just with a '=' to assign that property a value like so:

```js
car.rating = 'awesome' // Adds a new property to the object called 'rating' with a value of 'awesome'
car.make = 'Lincoln' // Changes the property 'make' to the value 'Lincoln'
```

As you can see with our car, an object's property values can be of any data type.

* **make** and **model**: string
* **isUsed**: boolean
* **mileage**: number
* **honk**: function
* **pastOwners**: array
* **seller**: object

Objects and arrays can be mixed and matched with other data types to handle any type of data storage you might need.

---

## Words to Know

### Properties, Keys, and Values

* Properties: Usually refer to the combination of the key/value pair of an object. Ex: make: 'Ford'
* Keys: Names of properties of the object. What we use to reference pieces of data inside an object. Ex: make
* Values: The actual piece of data in the object's property which is referenced by the object key. Ex: 'Ford'
