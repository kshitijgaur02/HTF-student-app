import React from 'react'
import {TiDelete} from 'react-icons/ti';

export const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
            <TiDelete size='1.5em' style={{cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}></TiDelete></h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task;