import React, { Component } from 'react';

const Todo = props => {

    return (
        <div className={`bMap${props.bMap.completed ? ' completed' : ''}`}
            onClick={() => props.toggleLine(props.bMap.id)}  >
    
            <p>{props.bMap.task}</p>
        </div>
    )
}

export default Todo;