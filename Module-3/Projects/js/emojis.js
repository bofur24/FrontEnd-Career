// 1. Loop through the myEmojis array and log each of them out to the console

// 2. Grab the emojiContainer div and store it in a variable. Log it to the console

// 3. Render the emojis as <span> tags in the emojisContainer <div>
// Hints: you can achieve this by creating an span with createElement(),
// setting its content with textContent, and using append() to append it to the container

// 4. Hook an event listener up with the button, and log out the input field's value when it's clicked

// 5. Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

// 6. Render the updated myEmojis array in the mini-browser.
// One solution: wrap the code for rendering the emojis in a function and make sure it
// clears away old version of the array before it renders the updated one

// 7. Make the unshift button work just as the push button (but with unshifting instead of pushing)

// 8. Make the pop and shift buttons work as well

const myEmojis = ["👨‍💻", "⛷", "🍲"]



function renderEmojis() {
    const emojiContainer = document.getElementById("emojiContainer")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++ ) {
        // console.log(myEmojis[i])
        const emoji = document.createElement("span")
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function() {
    const emojiInput = document.getElementById("emoji-input")
    if  (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""        
        renderEmojis()
    }
    
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function() {
    const emojiInput = document.getElementById("emoji-input")
    if  (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
    
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function() {
    const emojiInput = document.getElementById("emoji-input")
        myEmojis.pop()    
        renderEmojis()

    
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function() {
    const emojiInput = document.getElementById("emoji-input")
        myEmojis.shift()
       renderEmojis()
    
    
})