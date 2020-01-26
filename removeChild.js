/* 
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
*/

const myInput = document.querySelector('.myInput');
const myButton = document.querySelector('.myButton');
const rmButton = document.querySelector('.removeButton');

myButton.addEventListener('click', () => {
    //as there was only one ul, so we selected 0 index means first ul we got from DOM
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    //if value is null don't do anything if not null add in list and set value to 0
    if (myInput.value.length !== 0) {

        li.textContent = myInput.value;

        //appending the child to ul
        ul.appendChild(li);
        console.log(ul.length);
        myInput.value = '';

    }

});

rmButton.addEventListener('click', () => {
    //as there was only one ul, so we selected 0 index means first ul we got from DOM
    let ul = document.querySelectorAll('ul')[0];
    //removing selected child from the ul    
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
    console.log(ul.length);

});