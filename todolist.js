const readline = require('readline');
function Task(description, dueDate, priority) {
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;
}

let taskList = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printActions() {
  console.log('***************************');
  console.log('Welcome to JS TODO-APP');
  console.log('***************************');
  console.log('Select an action:');
  console.log('1) Add a new task');
  console.log('2) List all tasks');
  console.log('3) List completed tasks');
  console.log('4) Mark the task as done');
  console.log('5) Delete a task');
  console.log('6) Sort tasks by due date');
  console.log('7) Sort tasks by priority');
  console.log('8) Clear all tasks');
  console.log('***************************');
  rl.question('What\'s your choice? ', handleUserInput);
}

function handleUserInput(choice) {
  switch (choice) {
    case '1':
      addNewTask();
      break;
    case '2':
      listAllTasks();
      break;
    case '3':
      listCompletedTasks();
      break;
    case '4':
      markTaskAsCompleted();
      break;
    case '5':
      deleteTask();
      break;
    case '6':
      sortTasksByDueDate();
      break;
    case '7':
      sortTasksByPriority();
      break;
    case '8':
      clearAllTasks();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      printActions();
  }
}

function addNewTask() {
  rl.question('Enter task description: ', description => {
    rl.question('Enter due date (yyyy-mm-dd): ', dueDate => {
      rl.question('Enter priority (high/medium/low): ', priority => {
        const newTask = new Task(description, dueDate, priority);
        taskList.push(newTask);
        console.log(`Task "${description}" added successfully.`);
        printActions();
      });
    });
  });
}

function listAllTasks() {
  console.log('All tasks:');
  taskList.forEach(task => {
    console.log(`${task.description} (${task.dueDate}, ${task.priority}) - ${task.completed ? 'completed' : 'incomplete'}`);
  });
  printActions();
}

function listCompletedTasks() {
  console.log('Completed tasks:');
  const completedTasks = taskList.filter(task => task.completed);
  completedTasks.forEach(task => {
    console.log(`${task.description} (${task.dueDate}, ${task.priority})`);
  });
  printActions();
}

function markTaskAsCompleted() {
  rl.question('Enter task description: ', description => {
    const taskIndex = taskList.findIndex(task => task.description === description);
    if (taskIndex === -1) {
      console.log(`Task "${description}" not found.`);
    } else {
      taskList[taskIndex].completed = true;
      console.log(`Task "${description}" marked as completed.`);
    }
    printActions();
    });
    }
    
    function deleteTask() {
    rl.question('Enter task description: ', description => {
    const taskIndex = taskList.findIndex(task => task.description === description);
    if (taskIndex === -1) {
        console.log(`Task "${description}" not found.`);

    } else {
    taskList.splice(taskIndex, 1);
    console.log(`Task "${description}" deleted successfully.`);
    }
    printActions();
    });
    }
    
    function sortTasksByDueDate() {
    taskList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log('Tasks sorted by due date:');
    listAllTasks();
    }
    
    function sortTasksByPriority() {
    taskList.sort((a, b) => {
    if (a.priority === 'high' && b.priority !== 'high') {
    return -1;
    } else if (a.priority !== 'high' && b.priority === 'high') {
    return 1;
    } else if (a.priority === 'medium' && b.priority === 'low') {
    return -1;
    } else if (a.priority === 'low' && b.priority === 'medium') {
    return 1;
    } else {
    return 0;
    }
    });
    console.log('Tasks sorted by priority:');
    listAllTasks();
    }

function clearAllTasks() {
    taskList = [];
    console.log('All tasks cleared.');
    printActions();
    }

    printActions();
    
    module.exports = {
    Task
    };