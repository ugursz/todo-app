const input = document.querySelector('input');
const btn = document.querySelector('.add');
const list = document.querySelector('.task-list');
const btnClear = document.querySelector('.clear-task');

function addTask(e) {
  e.preventDefault();
  const newLi = document.createElement('li');
  const delBtn = document.createElement('button');

  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input.value !== '') {
    newLi.textContent = input.value;
    newLi.appendChild(delBtn);
    list.appendChild(newLi);
    input.value = '';
  } else {
    alert('Please add a task');
  }

  delBtn.addEventListener('click', () => {
    const parent = newLi;
    parent.remove();
  });
}

btn.addEventListener('click', addTask);

btnClear.addEventListener('click', () => {
  list.innerHTML = '';
});
