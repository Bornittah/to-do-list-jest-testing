import Todo  from './modules/storage';

const addTodo = () => {
  const data = Todo.getTodo();
  const index = Todo.getIndex();
  const todo = {
    index,
    description: this.description,
    completed: false,
  };

  if (data === null) {
    data.push(todo);
    localStorage.setItem('todo', JSON.stringify(data));
  }
  let newtodoList = JSON.parse(localStorage.getItem('todo'));
  newtodoList = [...data, todo];
  localStorage.setItem('todo', JSON.stringify(newtodoList));
  Todo.clearInput();
  Todo.display();
  Todo.updateIndex();
}

module.exports = addTodo;