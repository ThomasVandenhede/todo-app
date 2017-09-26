export function addTodo(id, text) {
  return {
    type: 'ADD_TODO',
    id,
    text,
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id,
  }
}

export function toggleCompleted(id) {
  return {
    type: 'TOGGLE_COMPLETED',
    id,
  }
}