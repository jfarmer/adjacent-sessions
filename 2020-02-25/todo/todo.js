function newTodoList(tasks) {
  if (tasks === undefined || tasks === null) {
    return [];
  } else {
    return tasks;
  }
}

function newTask(description, isComplete) {
  return {
    description: description,
    isComplete: isComplete,
  };
}

function addTask(list, task) {
  list.push(task);
}

function removeTask(list, idx) {
  let deletedItems = list.splice(idx, 1);

  return deletedItems[0];
}

function renderTodoList(todoList) {
  let todoListContainer = $('#todo-list');

  todoListContainer.empty();

  for (let task of todoList) {
    let listItemText = '';

    let listItem = $('<li>');

    if (task.isComplete) {
      listItemText += '✓ ';
    }

    listItemText += task.description;

    listItem.text(listItemText);

    todoListContainer.append(listItem);
  }
}

let todoList = newTodoList(loadTodoList());
renderTodoList(todoList);

function loadTodoList() {
  return JSON.parse(window.localStorage.getItem('todoList'));
}
function saveTodoList(todoList) {
  window.localStorage.setItem('todoList', JSON.stringify(todoList));
  // fs.writeFileSync('./todos.txt', JSON.stringify(todoList));
}

$('#task-info').on('submit', function(event) {
  event.preventDefault();

  let description = $('#task-description').val();
  let isComplete = $('#task-is-complete').prop('checked');

  let task = newTask(description, isComplete);

  addTask(todoList, task)

  renderTodoList(todoList);

  saveTodoList(todoList);
});
