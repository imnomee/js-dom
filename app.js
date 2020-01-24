const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myTextInput');

//Set heading color to red when you click on it
myHeading.addEventListener('click', ()=> myHeading.style.color = 'red');

//Set heading color to purple when you click the button
//myButton.addEventListener('click', ()=> myHeading.style.color = 'purple');

//Set heading color to the color written in text input
myButton.addEventListener('click', ()=> myHeading.style.color = myText.value);