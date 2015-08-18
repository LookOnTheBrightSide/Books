var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if (err) {
        console.log(err)
    };
    var query = {
        name: "shaggy"
    };
    var projection = {
    	"name":1, "_id": 0
    }
    db.collection('grades').findOne(query, projection, function(err, doc) {
        if (err) 
            throw err;
        console.log('========projection========')
        console.dir(doc)
        console.log('========projection========')
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


var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) 
{
     if(err) throw err;

     var query = { 'name' : "shaggy "};

     function callback(err, doc) {
          if(err) throw err;
          console.log('========callback========')
          console.dir(doc);
          console.log('========callback========')

          db.close();
     } 
     /* TODO */
     db.collection('grades').findOne(query, callback);
});




























