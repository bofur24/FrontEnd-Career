// Tools to help
    // console.log() = shows you the value of whatever is placed in the () when you click "RUN CODE"
    // Comments:  Javascript will ignore these lines like the one you see here with '//'.

// Introduction to Variables
    // Declare
    // Assign/Define
    // Use

    var number = 10
    console.log(number - 5)
    
    // Find if the two boxe's combined height will fit in the back of the truck.
    // First declare 2 variables, 'box1' and 'box2; and assign them each the height values shown in the slide.
    // Second, create a variable named 'combinedHeight' that stores the value of box1 added to box2
    // Third, create a variable named 'truckHeight' that stores the truck height capacity from the slide.
    // Lastly, console.log the value of the combinedHeight subtracted from the truckHeight, if it is a positive number, they will fit!

    var box1 = 1.342
    var box2 = 2.038
    var combinedHeight = box1 + box2
    var truckHeight = 3.5

    console.log(truckHeight - combinedHeight)

//////////////////////////
// Primitive Data Types //
//////////////////////////

// Strings
var name = "Joe"

// Numbers
var age = 20

// Booleans
// ture or false
var isOldEnoughToDrive = true

var username = "joe"
var password = "good"
var isChecked = true

console.log("Username:", username )
console.log("Password:", password)
console.log("Subscribe:", isChecked)

/////////////////////////////////
// Complex Data Types - Arrays //
/////////////////////////////////

// Arrays
// 0 indexed
            //0    //1    //2
var pets = ["dog", "cat", "bird"]
console.log(pets)

console.log(pets[0])
console.log(pets[2])
console.log(pets.length)

var friends = ["Mark", "Larry", "Joe"]

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

/////////////////////////////////////////
// Complex Data Types - Objects Part 1 //
/////////////////////////////////////////

// Objects

// describe a peice of data in depth

var dog = {
    name: "Spot",
    age: 4,
    isHungry: true,
    favToy: ["bone", "ball", "squeeky thing"]
}

console.log(dog)

console.log(dog["isHungry"])

var larry = {
    name: "Larry",
    age: 20,
    friends: ["John", "Lisa", "Al"],
    isPetOwner: true,
    greeting: "Hello Friend!",
    sayGreeting: function() {
        console.log(this.greeting)
    }
}

// Functions & Methods
    // Function: a type of data that allows us to execute specific code when/as needed
    // login
    // Method: A function that is a property of an object

larry.sayGreeting()

// this keyword inside of an object refers to itself


var object = {
    key: "value",

}

// Create an object that describes something of your choosing, like a car or animal.
// Give that object 5 key/value pairs that include all primitive and complex data types
// Give the object 1 method that uses the 'this' keyword to console log something from the object when called
// console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.



var car = {
    make:    "Mustang",
    model:   "Ford",
    year:     1970,
    hasTires: true,
    value: 50000,
    whereSold: ["Ford Dealership", "Cars Cars and More Cars"],
    speed:  "100mph",
    maxSpeed: function() {
        console.log(this.speed)
    }    
}

console.log(car.model)
console.log(car["make"])
car.maxSpeed()
