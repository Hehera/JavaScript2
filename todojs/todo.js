const listGroup = document.getElementById('listGroup')
const addTask = document.getElementById('add-task-button')
const input = document.getElementById('form-control')

addTask.addEventListener('click', renderTask)
listGroup.addEventListener('click', deleteTask)
listGroup.addEventListener('click', doneTask)
let tasks = [];

function renderTask() {
   const value = input.value
    
    const newTask = {
       id: Date.now(),
       text: value,
       done: false,
    }

    tasks.push(newTask)
    console.log(tasks)

    const cssClass = newTask.done ? 'textTask textTask--done' : 'textTask';

   if (value.length > 0) {
      const newItem = document.createElement('li')
      newItem.classList.add(
         'list-group-item',
         'd-flex',
         'justify-content-between',
         'align-items-center',
      )
   
      newItem.innerHTML = `
            <span class="${cssClass}">${newTask.text}</span>
            <div class="wrapper__done--close">
                <button class="btn__done">✓</button>
                <button class="btn__close">Х</button>
            </div>
        `
      newItem.setAttribute('id', newTask.id);
      listGroup.insertAdjacentElement('beforeend', newItem)
   }
   input.value = ''
   input.focus()
}
function deleteTask(event) {
   const clickedEl = event.target
   if (clickedEl.classList.contains('btn__close')) {
      const parentNode = clickedEl.closest('.list-group-item')
      parentNode.remove()


      const id = Number(parentNode.id)//рядок всі дані із розмітки = рядку, а Date now() - числовий тип данних
    //   const index = tasks.findIndex((task) => task.id === id)//Перший спосіб
        tasks = tasks.filter(task => task.id === id)//перезаписали так як вертаємо новий масив
        tasks.splice(index, 1)
   }
}
function doneTask(event) {
   const clickedEl = event.target
   const listItem = clickedEl.closest('.list-group-item')
   const textTask = listItem.querySelector('.textTask')
   const parentNode = clickedEl.closest('.list-group-item')

   const id = Number(parentNode.id)


  
    const task = tasks.find((task) => task.id === id)
    task.done = !task.done
    console.log(task)



   if (clickedEl.classList.contains('btn__done')) {
      if (!textTask.classList.contains('textTask--done')) {
         textTask.classList.add('textTask--done')
      } else {
         textTask.classList.remove('textTask--done')
      }
   }

    
}



