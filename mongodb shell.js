
// total collection (table) 
show collections

// total db 
show dbs







// inserting data in mongodb

use aniketKart  //if not created it will create





db.items.insertOne({name:"Samsung", price:22000, rating:4.5, qty:233,sold:98})  // single element insert

db.items.insertMany([{name:"Samsung", price:22000, rating:4.5, qty:233,sold:98},{name:"apple", price:92000, rating:4.7, qty:133,sold:8},{name:"vivo", price:12000, rating:3.1, qty:2339,sold:198}])   

db.items.find()  // to show the data

// in mongodb there is not complusory of putting same data, we can add any new column in a row 


db.items.insertMany([{name:"Samsung", price:22000, rating:4.5, qty:233,sold:98},{name:"apple", price:92000, rating:4.7, qty:133,sold:8},{name:"vivo", price:12000, rating:3.1, qty:2339,sold:198, isbig:true}])   

// -----------------------------------------------------------------------------------------------------------
db.items.find({rating:3.5})  // will find  rating = 3.5

db.items.find({price:{$gt:15000}})  // price>15000     

// gt--greater than,  gte--greater than equal to
// lt -- less than
db.items.find({rating:{$gte:4.5},price:{$gt:15000}})  // will find rating=3.5 and price>15000   // here comma is and operater

db.items.find({$or:[{rating:{$lte:3.5},price:{$gt:15000}}]})  //rating>=3.5 or price<15000


//deleting data from db
db.items.deleteOne({price:12000})
db.items.deleteMany({price:12000})



db.anothercollection.insertOne({a:5})  // create another table in aniketKart

show collections // anothercollection
                //  items


// Updating table

db.items.updateOne({name:"apple"},{$set:{price:10,rating:5.0}})
db.items.updateMany({name:"apple"},{$set:{price:10,rating:5.0}})