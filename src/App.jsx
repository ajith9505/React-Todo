import { useState } from 'react'
import Header from './Header'
import Section from './Section'

function App() {

  //Empty object to  add task with useState
  const [newTask, setNewTask] = useState({});

  //Input array of objects
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'on progress', status: 'Not Completed' },
    { id: 2, name: 'Task 2', description: 'done', status: 'Completed' },
    { id: 3, name: 'Task 3', description: 'on progress', status: 'Not Completed' }
  ]);

  //Use state for edit function
  const [edit, setEdit] = useState(0);

  //Use state for filter function
  const [filteredTask, updateFilteredTask] = useState('all');

  //Filtering task list
  const filteredTaskList = tasks.filter(task => {
    if (filteredTask === 'completed') {
      return task.status === 'Completed';
    } else if (filteredTask === 'notcompleted') {
      return task.status === 'Not Completed';
    } else {
      return tasks;
    }
  })

  //Function for add task
  function addTask(task) {
    task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, task]);
  }

  //Function for delete task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => id != task.id);
    setTasks(newTasks);
  }

  //Function for edit task
  const editTask = (id) => {
    const update = tasks.find(task => id === task.id);
    setNewTask({ id: update.id, name: update.name, description: update.description });
    setEdit(update.id)
  }

  //Function for filter task
  function filterTask(filterValue) {
    updateFilteredTask(filterValue);
  }

  //Function for status update
  const updateStatus = (id, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks}
        addTask={addTask} newTask={newTask}
        setNewTask={setNewTask} edit={edit}
        setEdit={setEdit} />

      <Section tasks={filteredTaskList} setTasks={setTasks}
        deleteTask={deleteTask} editTask={editTask}
        filterTask={filterTask} updateStatus={updateStatus} />
    </div>
  )
}

export default App


