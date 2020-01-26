/* 

https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling

https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

*/

const listItem = document.getElementsByTagName('li');
const button = document.getElementById('myButton');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');


listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'removeButton') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }

        if (event.target.className == 'upButton') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }


    }

});
