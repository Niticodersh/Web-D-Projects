let todo = JSON.parse(localStorage.getItem('Todo-list'))||[];
let show = ''
show_list(todo)

function HandleInput(event){
  if(event.key == 'Enter')
    {
      addTodo();
    }
}

function show_list(todo){
  let i = 0;
  while (i < todo.length){
    console.log('todo',todo[i])
    show+=`<div>${todo[i].work}</div> <div>${todo[i].dueDate}</div><button class="js-work_delete${i} delete-button" onclick="delete_work(${i})">Delete</button>`
    i+=1;
  }
  document.querySelector('.js-print').innerHTML = show;
  show = ``;
}
function addTodo()
{
  // console.log(document.querySelector('.js-input').value)
  todo.push({work:document.querySelector('.js-input').value, dueDate: document.querySelector('.js-input-date').value})
  localStorage.setItem('Todo-list', JSON.stringify(todo));
  console.log(todo);
  document.querySelector('.js-input').value='';
  document.querySelector('.js-input-date').value='';
  show_list(todo)
}

function resetTodo()
{
  document.querySelector('.js-print').innerHTML = ``;
  todo = [];
  localStorage.setItem('Todo-list', JSON.stringify(todo));
}

function delete_work(index)
{
  todo.splice(index, 1);
  console.log(todo);
  localStorage.setItem('Todo-list', JSON.stringify(todo));
  show_list(todo)
}
