const robot = document.querySelector('.robot')

//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!

//declare a variable
let move = 50

function moveRobot() {
    //add code here
    move += 50
   robot.style.top = move + 'px'
}
robot.addEventListener('click', moveRobot)