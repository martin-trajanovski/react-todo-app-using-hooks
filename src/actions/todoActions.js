export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    todo,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id,
  };
};
