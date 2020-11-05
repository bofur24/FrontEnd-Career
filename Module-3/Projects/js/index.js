
// var teacherGreeting = "Hello from Per, your teacher!";
// var studentGreeting = "Hello my name is Keith Heffington! I'm a Scrimba student"

// console.log(teacherGreeting);
// console.log(studentGreeting);

// var awesomeHeader = document.getElementById("myHeader")
// console.log(awesomeHeader)
// awesomeHeader.style.background = 'red';
// awesomeHeader.style.color = 'green';

// var myButton = document.getElementById("clickMeButton")
// console.log(myButton)
// var myTitle = document.getElementById("title")
// var counter = 0
// myButton.addEventListener("click", function(){
//     // console.log("button was clicked")
//     // myButton.style.background = "red"
//     // myTitle.textContent = "I'm learning JavaScript"
//     counter = 2
//     myButton.textContent = counter
// })


var myButton = document.getElementById("clickMeButton")
var counter = 5

myButton.addEventListener("click", function(){

    counter += 5

    myButton.textContent = counter
})