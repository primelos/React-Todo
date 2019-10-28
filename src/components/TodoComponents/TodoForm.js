import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super()
        this.state={
            newTodo
        }
    }

    render(){
        return (
            <form>
                <label htmlForm='item'>New Todo -></label>
                <input 
                    type='text'
                    name='item'
                    id='item'
                    // value={}
                    // onchange={this.addChange}
                />
            </form>
        )
    }
}
export default TodoForm;