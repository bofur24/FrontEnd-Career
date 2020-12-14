
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
 
