import React, { Component } from 'react';
import logo from './logo.svg';

// redux specific
import store from './store.js';
import { addTodo, deleteTodo, toggleCompleted } from './actions/todosActions';

// styles
import './App.css';

// components
import TodoList from './components/TodoList';

let id = 0;

class TodoApp extends Component {
  addItem(e) {
    e.preventDefault();

    if (this._input.value.trim() === '') {
      return;
    }

    store.dispatch(addTodo(
      ++id,
      this._input.value,
    ));
    this._input.value = "";
  }

  deleteItem(id) {
    store.dispatch(deleteTodo(id));
  }

  toggleCompleted(id) {
    store.dispatch(toggleCompleted(id));
  }

  render() {
    return (
      <div 
        style={styles.todo}
        className="App">
        <form 
          style={styles.todoForm}
          onSubmit={this.addItem.bind(this)} >
          <input
            type="text"
            name="item"
            placeholder="Enter some text"
            ref={el => this._input = el} />
          <button type="submit">Add</button>
        </form>
        <TodoList
          todos={store.getState()}
          onDelete={this.deleteItem}
          onToggle={this.toggleCompleted} />
      </div>
    );
  }
}

const styles = {
  todo: {
    'backgroundColor': 'darkgrey',
    'maxWidth': 500,
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'paddingTop': 10,
    'paddingBottom': 10,
  },
  todoForm: {
    'marginBottom': 20,
  },
}

export default TodoApp;
