// for performance I think I should use the declaration. I am not sure though but
// I think this just hoists Car and assigns it to undefined until it's actually used.
var Car = function(make, year, color, mileage) {
		this.make = make;
		this.color = color;
		this.year = year;
		this.mileage = mileage;
	}
	// Wow, for performance I have just learnt that I can add the function to the
	// prototype so I don't have to redo it when every object is created. This was a
	// a bit tricky for me to understand but now description now sits in the prototype
	// and not in the Car object... amazing hehe
Car.prototype.description = function() {
	return ("This is a " + this.color + " " + this.make + " from " + this.year);
}

};
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
	// binding the context to be that of the object getz
	// bind makes a copy of the object
var displayAdvert = advert.bind(getz);
console.log(displayAdvert("Parrow", "loko123"));


// call executes the code with the attached "this"

var alpha = new Car("Romeo", 2006, "Red", 20000);

console.log(advert.call(alpha, "Muizenberg", "dj_ayas"));

// apply accepts args as an array, it is exactly as call. It just invokes the function.
var hiace = new Car("Toyota", 2012, "Blue", 60000);
console.log(advert.apply(hiace, ["Kheyelitsha", "Bra_Joe"]));

// All functions have access to call, bind and apply



// function currying
// borrow function with some default presets
// example will be all cars made in 2006



var ToyotaCar = Car.bind(this, "Toyota");

var tazz = new ToyotaCar(2004, "Green", 300000);
console.log(advert.call(tazz, "Langa", "spokes_h"));
console.log(tazz.hasOwnProperty("description"));


// functional programming

var numbers = [];
for (var i = 0; i < 3; i++) {
	numbers.push(Math.floor(Math.random() * 255));
}

// this line then sets the alpha value for the color

numbers[numbers.length] = (Math.random()).toFixed(1);

console.log(numbers)

var r, g, b, strToNum;
r = numbers[0];
g = numbers[1];
b = numbers[2];
strToNum = parseFloat(numbers[3])
a = strToNum;
console.log(typeof a);
document.getElementById("value").innerHTML = "rgba(" + [r, g, b, a] + ")";
var color = "rgba(" + r + "," + g + "," + b + "," + a + ")";
console.log(color);
document.getElementById("container").style.background = color



for (var item in container) {
	if (container.hasOwnProperty(length)) {
		console.log(container[item] + "  :  " + item);
	}
}
