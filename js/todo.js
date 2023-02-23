function loadTodo(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => displayTodos(data))
};

function displayTodos(todos){
  const todoContainer  = document.getElementById('todoContainer');
  for(const todo of todos){
    console.log(todo);
    const todoDiv = document.createElement('div');
    todoDiv.innerHTML = `
    
    <h3>Title: ${todo.title}</h3>
    <p>User: ${todo.userId}</p>
    <p>Is Completed: ${todo.completed === true ? 'Completed' : 'Not Completed' }</p>
    `;
    todoContainer.appendChild(todoDiv);
}

}

loadTodo();


const stuInfo = JSON.stringify({name: "James"})
console.log(stuInfo.name)