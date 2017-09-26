import React, { StyleSheet } from 'react';

export default function(props) {
  return (
    <li>
      <div>
        <div
          style={{
            ...styles.todoText,
            'textDecoration': props.completed ? 'line-through' : 'none',
            'background': props.completed ? '#DDFFDD' : '#DDDDFF',
          }}
          onClick={() => 
            props.onToggle(props.todoId)}>
          {props.text}
        </div>
        <span
          style={styles.todoDelete}
          onClick={() => 
          props.onDelete(props.todoId)}>X</span>
      </div>
    </li>
  )
}

const styles = {
  todoText: {
    'display': 'inline-block',
    'cursor': 'pointer',
    'width': 200,
    'marginBottom': 10,
    'marginRight': 10,
    'padding': 5,
    'borderRadius': 15,
  },
  todoDelete: {
    'paddingRight': 3,
    'paddingLeft': 3,
    'borderRadius': '100%',
    'textAlign': 'center',
    'backgroundColor': 'red',
    'color': 'white',
    'cursor': 'pointer',
  }
};
