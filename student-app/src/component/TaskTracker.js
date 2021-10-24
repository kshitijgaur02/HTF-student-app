import React, {useState} from 'react';
import './TaskTracker.css'
import Tasks from './Tasks';
import AddTask from './AddTask';




function TaskTracker() {
  
  const [tasks, setTasks] = useState(
    [
        // {
        //     id: 1,
        //     text: 'Doctor Appointment',
        //     day: 'Oct 15th at 2:30pm',
        //     reminder: true,
        // },
        // {
        //     id: 2,
        //     text: 'Astro Club Meeting',
        //     day: 'Oct 25th at 7:30pm',
        //     reminder: true,
        // },
        // {
        //     id: 3,
        //     text: 'Grocery Shopping',
        //     day: 'Oct 24th at 5:00pm',
        //     reminder: false,
        // },
    
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete task
  const deleteTask =(id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <h3>Task Tracker</h3>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder}
      />: 'No Tasks To Show'}
    </div>
  );
}

export default TaskTracker;