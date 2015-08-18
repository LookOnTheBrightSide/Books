db.users.insert({name:"martin",username:"SmokeyBongo",group:"Selous",score:"80",email:"songs@song.com",class:"blue"});
//_id comes so set it to false if you do not want it
//1st arg is matched
db.users.find({name:"martin"}, {_id:false,score:true});
//query opreators 
//gt greater than lte less than or equal to lt gte
db.users.find({score:{$gt:50,$lte: 95},class:"blue"})
db.users.find({username:{$exists:true}})
//bson types --- string is 2
db.users.find({group:{$type: 2}})
//regex allowed in mongo
db.users.find({group:{$regex: "a"}})
db.users.find({name:{$regex:"q"},email:{$exists:1}})
//$or takes an array
db.users.find({$or:[{name:{$exists:1}},{age: {$exists: 1}}]});
//db.users.find({$and:{nameL{$gt: "c"}}})

//all
db.users.find({$all:{"favourites":["beer","snacks"]}})
//in finds docs with in
db.users.find({name:{$in:["eddy","pete"]}})
//mixing embeded docs
db.catalog.find({"price":{"$gt": 10000},"reviews.rating": {"$gte": 5}})
//cursors
cursor = db.users.find();
cursor.hasNext();
//true
cursor.next();
//returns next doc
cursor.limit(10); null;
//null stops the cursor returning
cursor.sort({name: -1}); null;
//reverses order by name 
cursor.skip(3); null;
//skips first 3
//sort limit skip in that order
db.users.count()


//update tales 2 args

db.users.update({name:"smith"},{name:"Konan",salary:400});
//update deletes and replaces everything and only leave the _id
db.users.update({name:"james"},{$set:{score:44}})
//set only adds to the doc
db.users.update({name:"james"},{$unset:{score:null}})
//unset removes the field
db.users.update({name:"james"},{$inc:{score:10}})
//inc increases 


//operators
//set a.3 push pull removes pop pull pushAll addToSet


////===== Example
{ _id : "Mike", interests : [ "chess", "botany" ] }

db.friends.update( { _id : "Mike" }, { $push : { interests : "skydiving" } } );
db.friends.update( { _id : "Mike" }, { $pop : { interests : -1 } } );
db.friends.update( { _id : "Mike" }, { $addToSet : { interests : "skydiving" } } );
db.friends.update( { _id : "Mike" }, { $pushAll: { interests : [ "skydiving" , "skiing" ] } } );
//result
{ "_id" : "Mike" , "interests" : [ "botany", "skydiving", "skydiving", "skiing" ] }
//===============================
//upsert: true as 3rd doc arg becomes update or insert

db.users.find({},{$set:{title:"mr"}},{multi:true})
//multi true updates all docs {}

//sharding atomicity

db.users.remove({score:{$lte:50}})

//importing a mongodb database
//mongoimport -d course -c grades grades.json


//$ query operator
var query = { "grade": { "$gt":69, "$lt":80}};
//get json database
//curl https://www.reddit.com/r/webdev/.json > reddit.json


db.reddit.find({title:{$regex: 'classified'}},{'title':1,'_id':0}).pretty()
//sort limit skip


db.collection('homeworks').findAndModify({}, [[ 'grade' , 1 ]], { '$set' : { 'dropped' : true } }, { 'new' : true }, callback);

db.data.find({ "Wind Direction" : { $gte : 180, $lte : 360}}).sort({ Temperature : 1}).pretty()
































