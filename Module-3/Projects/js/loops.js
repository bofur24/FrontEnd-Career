//let, const and var

//auto-completing a form for a bank

let age = 23 // let can change over time

age = 24 // age has changed

console.log(age)

const name = 'Ania' //const can not change over time

function autoComplete() {
    const name = "Keith" //this name is in scope of the function
    console.log('I, ' + name + ' can confirm, I am currently ' + age + ' years of age.')
}

autoComplete()

console.log(name) //this name is out of the function scope

var game = "football" //has no scope and will be picked up by the function