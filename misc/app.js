 var factory = function(genre) {
	return function(name, song, composer) {
		if (genre === "techno") {
			return (name + " chose " + genre +
				". A good song for you is : " + song +
				" by " + composer);
		}
		if (genre === "dnb") {
			return (name + " chose " + genre +
				". A good song for you is : " + song + " by " +
				composer);
		}
	}
}
function done(){
	console.log("All done, let's move on ...");
}

function add(a,b,callback){
	var  c = a + b;
	console.log(c);
	callback();
}

add(4,4, function(error){
	if (error){
		throw error;
	}
	console.log( "done adding now");
});


var dnb = factory("dnb");
var techno = factory("techno");
var technoTune = techno("Peter", "R U ok?", "Ambivalent");
var dnbTune = dnb("Robert", "Tarantula", "Pendulum");
var samPost = factory("dnb")("Sam", "Voodoo People", "Pendulum");

console.log(technoTune);
console.log(samPost);
console.log(dnbTune);
