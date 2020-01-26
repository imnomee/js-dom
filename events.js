/*
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/en-US/docs/Web/Events

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback

https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event

https://developer.mozilla.org/en-US/docs/Web/API/Event

*/
const listItem = document.getElementsByTagName('li');
const button = document.getElementById('myButton');
const listDiv = document.querySelector('.list');


listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase();
    }

});

listDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();

    }
});


//for (let i=0; i<listItem.length;i++){
//listItem[i].addEventListener('mouseover', ()=>{
//                          listItem[i].textContent = listItem[i].textContent.toUpperCase();
//                          
//                          
//                          });
//
//listItem[i].addEventListener('mouseout', ()=>{
//                          listItem[i].textContent = listItem[i].textContent.toLowerCase();
//                          
//                          
//                          });
//
//}