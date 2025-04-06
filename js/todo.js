const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function handleTodoSubmit(event) {
  event.preventDefault();

  // input의 현재 value를 새로운 변수에 복사
  const newTodo = toDoInput.value;

  toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleTodoSubmit);