
/*
What was Covered

1-Accessing elements from the DOM
2-Creating new DOM elements
3-Appending elements to the DOM
4-using event listeners
5-Modifying CSS styling from JavaScript
6-JavaScript For-loop
7-Basic problem-solving and debugging


*/



const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');


let count = 1;
function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';

    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
    
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function(){
        const allEntries = document.querySelectorAll('.single-entry');
        for(let index = 0; index < allEntries.length; index++) {
            console.log(allEntries[index].style.display = 'none')
        }
        entryDiv.style.display = "block";        
    })
    count++;
}


entryForm.addEventListener('submit', addEntryToDom)