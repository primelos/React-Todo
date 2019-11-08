import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            newTodo:''
        }
    }
    addChange = e => {
        this.setState({
            newTodo: e.target.value
        });
    };
    sendSubmit = e =>{
        e.preventDefault();
        console.log('its working')
        this.props.addTodo(this.state.newTodo)
        this.setState({ newTodo: ''})
}
    render(){
        return (
            <form onSubmit={this.sendSubmit}>
                <label htmlForm='item'>New Todo -></label>
                <input 
                    type='text'
                    name='item'
                    id='item'
                    value={this.state.newTodo}
                    onChange={this.addChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}
export default TodoForm;