//expression creates a value

//this points to the containing object 
//dynamic typing

//everytime a function is invoked js sets the context environment global environment arguments and this
//call apply bind

function sayHello(){

	setTimeout(function(){
		console.log("I am after 4 secs");
	}, 4000)
	console.log("I am in the settimeout")
	setTimeout(function(){
		console.log("hello world");
	},2500);
}
sayHello();


var countToTen = function(callback){
	console.log("counting to ten");
	callback();
}

countToTen(function(){
	console.log("I am done with all my tasks!")
})

var longArray = [{
        name: "Bob Mangena"
    },
    function(name) {
        console.log("hello " + name)
    },
    false,
    true,
    [3, 4, 5]
]
console.log(longArray[1](longArray[0].name));
var a = 2;
var b = 3;
var c = a * b;
console.log(c);

var Person1 = function(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.owner = function(newName, newAge) {
        this.name = newName;
        this.age = newAge;
        console.log(this);

        function setName(thisNewName) {
            this.name = thisNewName;
        }
        setName("Deep Stevo")
    }
}

//self

var Person = function(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.owner = function(newName, newAge) {
        var self = this;
        self.name = newName;
        self.age = newAge;

        console.log(self);

        function setName(thisNewName, thisNewAge) {
            self.name = thisNewName;
            self.age = thisNewAge;

        }
        setName("Gus Los Polos", 55);
    }
}

var understood = new Person("Kompany","hispanic",90)
console.log(understood)
understood.owner("Pedro",45)
//console.log(Kompany)
var boot = new Person("Dan", "White", 30)
console.log(boot)

//====

var Joe = new Person("Joe", "Doe", 30)
var Jane = new Person("Jane", "Doe", 38)

var greet = function(person) {
    console.log("hello " + person.name)
}



greet(Joe);
greet(Jane);

greet({
    name: "Rabbit"
})
JSON.stringify(Joe);
var Sandra = JSON.stringify({
    "name": "Sandra",
    "surname": "Bells",
    "age": 29
});

console.log(JSON.parse(Sandra));

console.log(Joe)


var name = "Bobby ";
name = name.repeat(3);
console.log(name);



function hello() {
    console.log("hello i am a computer!")
}
hello.len = 44;
console.log(hello.len);


function logA(intro) {
    intro()
}

logA(function() {
    console.log('hello witches');
});
logA(hello);

// by value only for primitives
// by reference for objects functions etc


var num1 = 4;
var num2;
var num2 = num1;

console.log(num2)
var num1 = 10;
var num2 = num1;
console.log(num2)
var Stevo = new Person("Stevo", "Jones", 33);
var Sam = Stevo;
Sam.name = "Samuel";
// console.log(Sam);
// console.log(Stevo);

// (function version(){
// 	this.process.version = 4.4;
// 	console.log(this.process.version);
// })();

Stevo.owner('Stevoooo function', 40);




function greetings(name,age,race){
	race = race || "B"
	console.log(name)
	console.log(age)
	console.log(race)
	console.log(arguments)
}




greetings("sam",23)