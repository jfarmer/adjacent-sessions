let todoList1 = {
  'title': 'Weekend Tasks',
  'tasks': [
    task1,
    task2,
    task3,
    task4,
  ],
};

let todoList1 = {
  'title': 'Weekday Tasks',
  'tasks': [
    task6,
    task7,
    task8,
    task9,
  ],
};


let task1 = createTask('Walk the dog');
let task2 = createTask('Bake a cake');

function createTask(description, isComplete) {
  let newTask = {};

  newTask['description'] = description;
  newTask['isComplete'] = isComplete;

  return newTask;
}

function markTaskCompleted(task) {
  task.isCompleted = true;
}

function taskIncreasePriority(task) {
  task.priority += 5;
}
