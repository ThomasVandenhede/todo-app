const rootReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case 'DELETE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      );
    case 'TOGGLE_COMPLETED':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      });
    default:
      return state;
  }
}

export default rootReducer;