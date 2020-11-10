console.log("Hello and Welcome")

//Write a function that sets off an alert in your console
//camelCase

//without parameters
function showAlert() {
    console.log('You have been alerted')
}

showAlert()

//with parameters

function showAlert1(firstName, lastName) {
    console.log(firstName + ' ' + lastName + ', you have been alerted')
}

showAlert1('Keith', 'Heffington')
showAlert1('Logan', 'Tom', 'Jenny')


// using global variables in functions
const firstName = 'Keith'
let calls = 0

function showAlert2(){
    calls += 1
    console.log(firstName + ', you have been called ' + calls + ' times')
}

showAlert2()





