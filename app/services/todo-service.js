import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/micah/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
    //TODO Handle this response from the server
    .then(res => {
      let todos = res.data.data.map(rawTodoData => new Todo(rawTodoData))
      // let todos = res.data.todos
      console.log("getTodos todos" + todos)
      console.log(todos)
      store.commit('todos', todos)
      console.log(store.State)
    })
    .catch(err => console.error(err))
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
    .then(res => {
      console.log(res.data.data)// probably not correct
      let newTodo = new Todo(res.data.data)
      let todos = [newTodo, ...store.State.todos]
      store.commit('todos', todos)
    })
    .catch(err => console.error(err))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if(todo.completed == true){
      todo.completed = false
    } else if(todo.completed == false){
      todo.completed = true
    }

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(todoId)
    .then(res =>{
      console.log(res.data)
      this.getTodos()
    })
    .catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
 