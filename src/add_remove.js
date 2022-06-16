
const addItem = (task) => {
const li = document.createElement('li');
li.setAttribute('class', 'list-item');
li.innerHTML = task;
document.querySelector('.list').appendChild(li);

}

module.exports = addItem;