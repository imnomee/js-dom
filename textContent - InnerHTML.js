//Text Content to change the text
const input = document.querySelector('input');

const p = document.querySelector('p.descn');

const button = document.querySelector('button');

button.addEventListener('click', () => {

    p.textContent = input.value + ' :';
})




//InnerHTML to change the html It will replace all the contents of UL with oneitem or you can add more

const ul = document.querySelector('ul');
ul.innerHTML = `<li>Lolzy</li>
                <li>Okay</li>
                <li>Nah</li>`;