//Selecting using Tag Name
const myHeading = document.getElementsByTagName('h1')[0];

const myList = document.getElementsByTagName('li');

//Selecing using Classes
const notPurple = document.getElementsByClassName('not-purple');

//Selecting using QuerySelectors
//const notPurple = document.querySelectorAll('.not-purple');

const evens = document.querySelectorAll('li:nth-child(even)');

//Selecting using ID
//const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myTextInput');

//Set heading color to red when you click on it
myHeading.addEventListener('click', () => myHeading.style.color = 'red');

//Set heading color to purple when you click the button
//myButton.addEventListener('click', ()=> myHeading.style.color = 'purple');

//Set heading color to the color written in text input
myButton.addEventListener('click', () => myHeading.style.color = myText.value);


//Change color of list using for loop
for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';

}

//Change color of not found list using for loop
for (let i = 0; i < notPurple.length; i++) {
    notPurple[i].style.color = 'ivory';

}

//Change color of evens in list using for loop
for (let i = 0; i < evens.length; i++) {
    evens[i].style.backgroundColor = 'grey';

}

//Adding colors from colors array using iD collection
// var listItems=document.getElementById('rainbow');
// var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

// for(var i = 0; i < colors.length; i ++) {
//   listItems.children[i].style.color = colors[i];    
// }

//OR FOLLOWING WORKS SAME

var listItems = document.querySelectorAll('li');
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}