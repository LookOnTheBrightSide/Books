// for performance I think I should use the declaration. I am not sure though but
// I think this just hoists Car and assigns it to undefined until it's actually used.
var Car = function(make, year, color, mileage) {
	this.make = make;
	this.color = color;
	this.year = year;
	this.mileage = mileage;
	this.description = function() {
		return ("This is a " + this.color + " " + this.make + " from " + this.year);
	}
}

var getz = new Car("Hyundai", 2006, "White", 160000);
// console.log(getz.description());

// this does not make any sense at all as I probably should add advert to the constructor
// like below.
// I realised after a while ha ha. I was just trying to wrap my head around bind.


// Car.prototype.advert = function(surburb, username) {
// 	console.log("This " + this.make + " is for sale in " + surburb +
// 		" and the owner is " + username);
// }

// console.log(getz.advert("Sea Point", "batman22"));


var advert = function(surburb, username) {
		console.log("This " + this.make + " is for sale in " + surburb +
			" and the owner is " + username);
	}
	// binding the conext to be that of the object getz
var displayAdvert = advert.bind(getz);
console.log(displayAdvert("Parrow", "loko123"));
