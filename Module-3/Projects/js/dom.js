
// Select single element from the page  - returns object getElementById
// Select multiple elements - returns an array of elements getElementsByClassName

var hello = document.getElementById("hello")

console.log(hello)
console.dir(hello)

var thing = document.getElementsByClassName("things")

for (var i = 0; i < thing.length; i++) {
    console.log(thing[i].innerText)
}

// querySelector - Select a single element from the page.
var result = document.querySelector("#favorite-things")
console.log(result)

var result = document.querySelector("ol#favorite-things > li")
console.log(result)



//querySelectorAll - Select all elements from the page that match the query.
var result = document.querySelectorAll("#favorite-things")
console.log(result)

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}

// innerHTML - security risk
// innerText - "expensive"
// textContent

// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)

/**
 * 1. Select the h2 element
 * 2. Save the h2 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h2
 */

 var copyText = document.querySelector("#header").textContent
 document.querySelector("#paragraph").textContent = copyText
 console.log(copyText)

 var header = document.getElementById("header1")
 header.style.color = "blue"
 header.style.textAlign = "center"

document.body.style.backgroundColor = "burlywood"

// className
// var className = document.querySelector("#header").className

// classList
// document.querySelector("#header").classList.add("new-class")
// document.querySelector("#header").classList.remove("another") 
// console.log(document.querySelector("#header").className)

var inputBox = document.getElementById("text-input")
inputBox.value = "CHANGED!"

var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)

/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

 var newP = document.createElement("p")
 newP.textContent = "Hello World"
 document.body.append(newP)
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)

// innerHTML vs textContent

var myList = document.getElementById("my-list")
myList.innerHTML += "<li>4</li>"

document.body.innerHTML += "<p id='paragraphHelp'>V School rocks!</p>"
document.getElementById("paragraphHelp").style.textAlign = "center"

// ## Tasks:

// 1. Search Google to learn a little more about the difference between the `.append()` method and the `.appendChild()` method

// 2. What do you see as pros/cons of using `.createElement()` and `append()` vs. `.innerHTML`?

// 3. What happens if I create an element using `.createElement()` but don't use `.append()`?

// 4. How might you use a for loop in conjunction with the DOM methods for create elements?