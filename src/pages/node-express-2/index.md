---
title: Node/Express 2 - Setting Up the Server
date: "2018-03-24T20:54:17.776Z"
---

Now that we've got our directory structure setup, we can start writing some code to wire up our server. First things first, we should install `express` for our project. So within the directory we created our project we'll run:

`npm install express`

When you created your project, just make sure that you don't have it named "express", otherwise NPM will complain when it tries to install the `express` package. You can check the `package.json` file under the "name" key.

Now we can put in some minimal code to get things running (it's really simple!):

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' })
})

app.listen(3000)
```

All we need to do is create an app based on the express package that we `require`d at the top. This `app` variable is what we'll use to configure everything about our express app and start the server.

To tell the server what routes it should listen on, we can call the various methods on our `app` that correspond to the HTTP request types (GET, POST, PUT, DELETE). These functions take the path that they should listen on as well as a function that will handle the request. We're using the arrow function syntax here and this function takes in both a request and response object. The request object contains data about the request itself and the response object is the one we can modify and call to return data to the user.

In this case, we're telling Express to return the JSON data of `{msg: 'Hello World!'}`. There's multiple things that Express can return the client who's making the web request, check out the [API documentation](http://expressjs.com/en/4x/api.html) for more options. You should get used to reading the API documentation by the various packages/frameworks that you use. Tutorials like this one are great for getting started, but anything that you want to do beyond this will likely come from reading the provided API docs.

Let's spruce things up a bit and add some more functionality:

```js
const express = require('express')
const app = express()
const chalk = require('chalk')

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' })
})

const server = app.listen(3000, () => {
  console.log('Listening on port:', chalk.cyan(3000))
})

server.on('error', err => {
  console.log(chalk.red('Error:'), err)
})
```

We've included a new module to use, chalk, so let's install it first with `npm i chalk`. You can just use the letter i with npm instead of "install". Chalk is a great module that you can use to write colored text to the terminal. Writing to the log is a very important thing when you're developing your apps so you can get a better idea of what's going on.

The next thing we added is a callback function on the `app.listen` call. This function will be called after the server begins listening on the specified port. You'll find that many function calls in the Javascript world can have multiple signatures, meaning that you can provide a different set of parameters to the same function depending on how you want it to behave.

The last thing is we now are saving the `server` object returned by `app.listen`. With this object, we can use the `on` call to specify a callback to be called when a certain event happens. In this case we're listening for the 'error' event that can happen. If so, the callback function will be called with the single parameter containing the error information.

The final change we want to make to our app so far is to get rid of having a hard-coded port number in our source code. For that, we'll use variables that'll be read from an external file.

```js
require('dotenv').config()
const express = require('express')
const app = express()
const chalk = require('chalk')

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' })
})

const server = app.listen(process.env.PORT, () => {
  console.log('Listening on port:', chalk.cyan(process.env.PORT))
})

server.on('error', err => {
  console.log(chalk.red('Error:'), err)
})
```

Another NPM module is required here, so let's install that with `npm i dotenv`. That's the package that I usually use for reading in variables from an external file. It'll look for a `.env` file in the root directory of your project and load all the variables there into the `process.env` object.

With our new package being used, we can create a new file in the root of our project called `.env`. In this file we'll just have one line for now:

```
PORT=3333
```

Now with our new `.env` file and the `dotenv` package being used, we can use the value read in by that module when we start our server. It'll now listen on the port that we specify in the file, not one that's hard-coded in our code.

Using environment variable files like this is super important when you have two environments that your app might be running in, such as a local test environment and the remote production one. You can have two separate `.env` files in each location to customize things to how each environment needs them. It's also important to note that you shouldn't commit the `.env` file to source control. This is due to wanting to keep separate versions of the file for environments, but also because things API or database credentials will be stored in these files.
