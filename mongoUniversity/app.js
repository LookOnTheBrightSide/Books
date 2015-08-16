var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if (err) {
        console.log(err)
    };
    var query = {
        name: "shaggy"
    };
    db.collection('grades').findOne(query, function(err, doc) {
        if (err) 
            throw err;
        
        console.dir(doc)
        db.close()
    })
})