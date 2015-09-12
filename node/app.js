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

//Access-Control-Allow-Origin

// GET: retrieves information from the specified source 
// POST: sends new information to the specified source.
// PUT: updates existing information of the specified source.
// DELETE: removes existing information from the specified source.



// An HTTP request is made up of three parts:

// The request line, which tells the server what kind of request is being sent 
//    (GET, POST, etc.) and what resource it's looking for;
// The header, which sends the server additional information 
//    (such as which client is making the request)
// The body, which can be empty (as in a GET request) 
//     or contain data (if you're POSTing or PUTing information, 
//     that information is contained here).

//Endpoints are API-defined locations where particular data are stored. 
//  Just as you'll GET a pair of pants from PantsWorld or you'll 
//  GET a bag of peanuts from PeanutHut, you'll GET something different 
//  depending on the endpoint you use.

//For instance, if you're using the API for a video hosting service, 
// there might be endpoints for the most popular videos, 
// the most recent videos, or videos belonging to a certain genre or category.


//The HTTP response structure mirrors that of the HTTP request. It contains:

//
//A response line, which includes the three-digit HTTP status code;

//A header, which includes further information about the server and its response;

//The body, which contains the text of the response.



var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);


//console.log(xhr.open().arguments)



//sooundclud demo sdk

SC.initialize({
	//==========
  client_id: ''
  //============
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'black coffee',year:2015 }, function(tracks) {
   $(tracks).each(function(index, track) {
     $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
  $('a.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function(){
            SC.get('/me',function(me){
                    $('#username').html(me.username);
                });
        });
  });
});
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
    SC.get('/tracks/293',function(track){
            $('#player').html(track.title);
        });
});

SC.initialize({
  	//==========
  client_id: ''
  //============
});

$(document).ready(function() {
    SC.get('/tracks/294',function(track){
           SC.oEmbed(track.permalink_url,document.getElementById('player'));
        });
});

SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
SC.stream('/tracks/293', function(sound) {
  $('#start').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});
});















//========