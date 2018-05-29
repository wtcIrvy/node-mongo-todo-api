const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if(err){
        return console.log("Unable To Connect To MongoDb");
    }
    console.log("Succesfully connected to MongoDB");
    const db = client.db('TodoApp');

    db.collection('Users').find({name: 'Luke Irvine'}).count().then((count) =>{
        console.log(`Found ${count} results`);
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
    });
    client.close();
});