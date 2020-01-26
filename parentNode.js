const listItem = document.getElementsByTagName('li');
const button = document.getElementById('myButton');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');


listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }

});
