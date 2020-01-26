// 1: Set the text of the <h1> element
const headingText = document.querySelector('h1');
headingText.textContent = 'Biggest Heading';

// 2: Set the color of the <h1> to a different color
headingText.style.color = 'tomato';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const pDesc = document.querySelector('p.desc');
pDesc.innerHTML = 'This is <em>Inner HTML</em> paragraph input.';

// 4: Set the class of the <ul> to 'list'
const ulList = document.getElementsByTagName('ul')[0];
//const ulList = document.querySelector('ul'); Works the same
ulList.className = 'list';

// 5: Create a new list item and add it to the <ul>
const listItem = document.createElement('li');
listItem.innerHTML = '<input> Lol this was the wrong part';
ulList.appendChild(listItem);

// 6: Change all <input> elements from text fields to checkboxes
const inputEls = document.querySelectorAll('input');
//const inputEls = document.getElementsByTagName('input'); Works the same
for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

const buttonItem = document.createElement('Button');
buttonItem.textContent = 'Delete';
const extraDiv = document.querySelector('div.extra');
extraDiv.appendChild(buttonItem);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
//Selecting the parent Div to remove child in next step
const parentDiv = document.querySelector('.container');
buttonItem.addEventListener('click', () => {
    parentDiv.removeChild(extraDiv);
});
