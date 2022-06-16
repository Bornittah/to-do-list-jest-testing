const addItem = require('../add_remove');

describe('Add Item Tests', () => {
  const task = 'test';
test('Add item to the list', () => {
  // document.body.innerHTML = '<ul class="list"></ul>';
  const list = document.querySelectorAll('.list');
  addItem(task);
  expect(list).toContain(task);
});

});