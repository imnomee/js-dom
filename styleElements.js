/* 
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
*/

p.style
p.style.color = 'darkblue'

p.style.backgroundColor = 'lightblue'

const toggleListButton = document.getElementById('toggleList');
const listDiv = document.querySelector('.listDiv');

toggleListButton.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        button.textContent = 'Hide Div';
        listDiv.style.display = 'block';

    } else {
        button.textContent = 'Show Div';
        listDiv.style.display = 'none';
    }
})