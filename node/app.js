//expression creates a value


var a = 2;
var b = 3;
var c = a * b;
console.log(c);

var Person = function(name,surname,age){
	this.name = name;
	this.surname = surname;
	this.age = age;
}

var Joe = new Person("Joe","Doe",30)
var Jane = new Person("Jane","Doe",38)

var greet = function(person){
	console.log("hello "+ person.name)
}

 

greet(Joe);
greet(Jane);

greet({name:"Rabbit"})
JSON.stringify(Joe);
var Sandra = JSON.stringify({"name": "Sandra","surname":"Bells","age":29});

console.log(JSON.parse(Sandra));

console.log(Joe)


var name = "Bobby ";
name = name.repeat(3);
console.log(name);



function hello(){
	console.log("hello i am a computer!")
}
hello.len = 44;
console.log(hello.len);


function logA(intro){
	intro()
}

logA(function(){
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
var Stevo = new Person("Stevo","Jones",33);
var Sam = Stevo;
Sam.name = "Samuel";
console.log(Sam);
console.log(Stevo);

















































