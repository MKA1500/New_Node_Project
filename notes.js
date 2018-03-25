console.log('starting notes.js');
module.exports.age = 25;
module.exports.addNote = () => {
  console.log('addNote');
  return 'new note';
}
module.exports.addSomething = (a,b) => {
  return a + b;
}
