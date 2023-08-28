let todos = []
const todoList = document.getElementById('todos')
function renderTodo(){
    todos.forEach((todo,i)=>{
        let currentHTML = todosList.innerHTML
        let newHTML = (
            `<div class= "todoItem">
            <p> ${i + i}. $(todo)</p></div>`
        )
    })
}