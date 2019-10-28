// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo'


const TodoList = (props) => {

    return(
        <div>
            {props.todo.map(bMap => (
                <Todo 
                    key={bMap.div}
                    bMap={bMap}
                    toggleLine={props.toggleLine}
               />
            ))}
        <button className='clear' onClick={props.clearTodo}>
            remove todo</button>
        </div>
    )
}
export default TodoList