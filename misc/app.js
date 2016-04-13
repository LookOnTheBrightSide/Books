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

var dnb = factory("dnb");
var techno = factory("techno");
var technoTune = techno("Peter", "R U ok?", "Ambivalent");
var dnbTune = dnb("Robert", "Tarantula", "Pendulum");
var samPost = factory("dnb")("Sam", "Voodoo People", "Pendulum");

console.log(technoTune);
console.log(samPost);
console.log(dnbTune);
