export default class Todo {
  constructor(data){
    console.log('[RAW TODO API DATA]')
    this._id = data.id || data._id
    this.completed = data.completed || false
    this.user = data.user || "micah"
    this.description = data.description || "no description provided"
  }

  get Template(){
    if(this.completed){
      return `
      <div class="col-4">
      <p><input type="checkbox" id="${this._id}"  onclick="app.todoController.toggleTodoStatus('${this._id}')" checked/><strike>${this.description}</strike> <button type="button" class="btn btn-danger btn-sm" onclick="app.todoController.removeTodo('${this._id}')">x</button></p>
      </div
      `
    } else{
      return `
      <div class="col-4">
      <p><input type="checkbox" id="${this._id}"  onclick="app.todoController.toggleTodoStatus('${this._id}')" />${this.description}<button type="button" class="btn btn-danger btn-sm" onclick="app.todoController.removeTodo('${this._id}')">x</button></p>
      </div>
      `
    }
  }

  // get Template(){
  //   return `
  //   <div class="col-4 border border-info rounded shadow">
  //   <h3>ID: ${this._id}<h3>
  //   <h3>Description: ${this.description}<h3>
  //   <h3>Completed: ${this.completed}<h3>
  //   <button type="button" class="btn btn-danger btn-block" onclick="app.todoController.delete('${this._id}')">Delete</button>
  //   <button type="button" class="btn btn-success btn-block" onclick="app.todoController.toggleTodoStatus('${this._id}')">Status</button>
  //   </div>
  //   `
  // }

}
