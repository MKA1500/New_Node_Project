console.log('starting app.js');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
var add = notes.addSomething;
console.log(add(7,3));

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
  if(err){
    console.log('Unable to write to file');
  }
});
/*
const express = require('express')
const app = express()
const port = 3000

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
*/
