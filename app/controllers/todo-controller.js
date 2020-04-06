import TodoService from "../services/todo-service.js";
import store from "../store.js";
import _store from "../store.js"

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let todos = _store.State.todos
  console.log(typeof todos)
  console.log(todos)
  template += `<p class="todo-count">Todo Count:  ${_store.State.todos.length.toString()}</p>`
  todos.forEach(todo => template += todo.Template)
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.description.value
    };
    TodoService.addTodoAsync(todo);
    form.reset()
    // $('add-todo-modal').modal('toggle')
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
    _drawTodos()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
    _drawTodos()
  }
}
 