import React from 'react'
import Task from '../Task';
import { useState } from 'react';

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks)

  const tareasCompletadas = () => {
    const completadas = tasks.filter(task => task.isDone);
    return completadas.length;
  }

  const actualizarTarea = (id) => {
    //1. Copiar el arreglo [...arreglo]
    const cpTasks = [...tasks];
    //2. Modificar el arreglo
    const newTasks = cpTasks.map(task => {
      if (task._id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div>
      <p>ToDoList <strong>{tareasCompletadas()}/{tasks.length}</strong></p>
      <div className='row'>
        { tasks.map(task => {
        return (
          <Task
            key={task._id}
            tarea={task}
            actualizarTarea={actualizarTarea}/>
        );
      })}
      </div>
    </div>
  )
}

export default ToDoList