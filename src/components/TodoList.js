import React from 'react';

import Todo from './Todo';

export default function TodoList(props) {
  const todoComponents = props.todos.map(todo =>
    <Todo
      {...props}
      key={todo.id}
      todoId={todo.id}
      text={todo.text}
      completed={todo.completed} />
  );

  return (
    <ul style={styles.todoList}>
      {todoComponents}
    </ul>
  );
}

const styles = {
  todoList: {
    'listStyle': 'none',
    'padding': 0,
    'margin': 0,
  }
}