import Todo from '../modules/storage.js';

describe('Add and Remove Item Tests', () => {
  const task = 'Eat Supper';
  const todo = new Todo(task);
  document.body.innerHTML = '<ul class="list"></ul>';
  const list = document.querySelectorAll('.list');
  test('Add item to the list', () => {
    todo.addTodo();
    expect(list).toHaveLength(1);
  });

  test('Remove item from the list', () => {
    Todo.removeTodo(0);
    expect(list[0]).toBeNull();
  });
});
