const squares = Array.from(document.querySelectorAll('.grid div'))
let currentSnake = []

//add the number 0 to the currentSnake array to see what happens
currentSnake.push(4)
//Challenge: draw the snake as 3 squares long on the third row down using unshift
currentSnake.unshift(23,22,21,35,40,41,42,43)
//Challenge: add to the HEAD of the snake using push
currentSnake.push(24)

currentSnake.forEach(index => squares[index].classList.add('snake'))