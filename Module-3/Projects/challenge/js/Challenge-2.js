//loops and arrays part 1

//Challenge: you are at your shift at the shop and the owner has left you with a long list of
//things in the inventory. He has asked you to find out how many 'mustard' bottles you have in 
//stock. Use a for loop to count the amount of 'mustard' you have.

const shopInventory = ['milk', 'cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk', 'garlic', 'mayo', 'carrots', 'cheddar', 'mustard', 'mayo', 'orange juice']

shopInventory[0].toLowerCase()
let count = 0;

for (let i = 0; i <= shopInventory.length; i++) {
   
   

    if (shopInventory[i] === 'mustard') {
        count += 1
    }
}

console.log(count + ' Mustards in the inventory')
