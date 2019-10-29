import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'
const data = [
  {
    task: 'Learn Angular',
    id: 1234,
    completed: false
  },
  {
    task: 'Learn Java',
    id:2345,
    completed: false
  }
]

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state={
     todo: data
    }
  }

  addTodo = task => {
    const newTodo = {
      task: task,
      id:Date.now(),
      completed: false
    }
      this.setState({
      todo:[...this.state.todo, newTodo]
    })
  }

  toggleLine = id => {
    this.setState({
      todo: this.state.todo.map(aMap => {
        if (aMap.id === id) {
          return {
            ...aMap,
            completed: !aMap.completed
          }
        }else{
          return aMap
        }
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          toggleLine={this.toggleLine}
          todo={this.state.todo}
          />

      </div>
    );
  }
}

export default App;
