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

































