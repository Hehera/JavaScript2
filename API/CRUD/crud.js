    async function getAllTodo() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
        const data = await response.json()
        console.log(data)
        data.forEach(data => {
            renderTaskAll(data)
        });
    } 
 getAllTodo() 


 function renderTaskAll({title, completed, id }) {
    const ListTodo = document.getElementById('todos')
    const isChecked = completed ?  'checkbox' : ''
    ListTodo.insertAdjacentHTML('beforeend', `
    <div class="form-check" id="todo${id}">
    <label for="" class="form-check-label">
        <input onchange='toggleTasks(${id})'  type="checkbox" class="form-check-input" id="${isChecked}">
        ${title}
    </label>
    <button onclick='deleteTask(${id})'  type="button" class="btn-close" aria-label="Close" style="font-size: 10px;"></button>
    </div>
    `)
 }

 addTodo.addEventListener('click', async () => {
    const input = document.getElementById('todoText')
    const inputValue = input.value
    
    if(inputValue){
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title:inputValue,completed:false})
        })
        const data = await response.json()
        console.log(data)
        renderTaskAll(data)
    }
 })



async function deleteTask(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'}
    })
    const data = await response.json()    
    console.log(data)
    if(data) {
      document.getElementById(`todo${id}`).remove()
    }
}


async function toggleTasks(id) {
    const completed = document.querySelector(`#todo${id} input`).checked
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({completed})
    })

    const data = await response.json()
    console.log(data)
    
}
