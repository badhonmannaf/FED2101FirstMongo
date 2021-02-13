//1. brings in mongoDb allows connection to mongo
const { MongoClient } = require ('mongodb'); 

//2. Method to conect to database then takes in callback function of err and client (client will allow to create and manipulate)
//3. const db will grab database or create databvase if doesnt exist
//4. error check using if truthy falsy.  
MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db("FED2101FirstMogo");

    if(err){
    return console.log("Unable to connect");
    }

    console.log("completed connection");

    db.collection('FED2101FirstMongo').insertOne({
    taskName: "Learn Mongodb",
    completed: false
    }, (err, result) => {
        if(err){
            console.log('Error inserting data');
        }
    });

    client.close();

});