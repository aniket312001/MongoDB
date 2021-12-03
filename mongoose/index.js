// npm init
// npm install mongoose

// for starting again
// install npm


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}





const kittySchema = new mongoose.Schema({   // step 1 is create schema
    name: String
  });

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  var greeting = "my name is " + this.name
    
  console.log(greeting);
};


const Kitten = mongoose.model('Kitten', kittySchema);  // step 2 is create model


const aniket = new Kitten({ name: 'fluffy' });  //  step 3 create row 
// console.log(aniket.name); // 'Silence'
// aniket.speak()
// aniket.save()

aniket.save((err,aniket)=>{
  if (err) {
    return console.error(err)
  } 
  aniket.speak()
})

Kitten.find({name:"fluffy"},(err,aniket)=>{
  if (err) {
    return console.error(err)
  }
  console.error(aniket)
})

// Go in shell and then 
use test 
db.kittens.find()