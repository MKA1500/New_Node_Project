console.log('starting app.');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World!', function(err){
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
