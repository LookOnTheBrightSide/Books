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
//=====to array
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if (err) {
        console.log(err)
    };
    var query = {
        name: "shaggy"
    };
    db.collection('grades').find(query).toArray(function(err, doc) {
        if (err) 
            throw err;
        
        console.dir(doc)
        db.close()
    })
})

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if (err) {
        console.log(err)
    };
    var query = {
        name: "shaggy"
    };
    var cursor = db.collection('grades').find(query) 
    cursor.each(function(err,doc){
    	if (err)
    		throw err
    	if (doc == null) {return db.close()};
    	console.dir(doc.name + " is a bad ass! " + doc.song )
    })
    
})































