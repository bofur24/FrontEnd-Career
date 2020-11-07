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


//Challenges:

//We need to write a function that will allow us to count books each we get a new one in a delivery.
//What variable would you assign the variable `bookCount` in the situation below.
//Please replace the ** to make the function work.

let bookCount = 0

function increment(){
    bookCount +=1
}
increment()


//We have just sold 3 books and got 3 new ones! What would you have to do here to the `books` variable for the function to work so it would replace the current books array with our 3 new ones?
//Please make the function work.

let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
}
replaceBooks()


//We need to text our a customer that their book is in. What would you have to do here in order for this function to work?
let firstName = 'Molly' 
function textCustomer() {       
   
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer()

//For loops

// for(let i = 0; i < 10; i ++) {
//     //code will be ran 10 times
//     console.log(i) // 0 1 2 3 4 5 6 7 8 9
// }

//Challenge: print out in your console 0 mississippi to 100 mississippi

for(let a = 0; a < 101; a++) {
    console.log(a + " Mississippi")
}

//For loops with arrays

const europe = ["Sweden", "Norway", "Bulgaria", "France", "Germany", "Poland"]

for(let i = 0; i < europe.length; i++) {
    console.log(europe[i])
}


// Mini Challenge: 

const alEastTeams = ["Orioles", "Red Sox", "Yankees", "Rays", "Blue Jays"]
const alCentralTeams = ["White Sox", "Indians", "Tigers", "Royals", "Twins"]
const alWestTeams = ["Astros", "Angels", "Athletics", "Mariners", "Rangers"]
const nlEastTeams = ["Braves", "Marlins", "Mets", "Phillies", "Nationals"]
const nlCentralTeams = ["Cubs", "Reds", "Brewers", "Pirates", "Cardinals"]
const nlWestTeams = ["Diamondbacks", "Rockies", "Dodgers", "Padres", "Giants"]



for(let i = 0; i < alCentralTeams.length; i++) {
    console.log(alCentralTeams[i])
}