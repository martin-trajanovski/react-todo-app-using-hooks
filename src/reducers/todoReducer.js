export const initialState = {
  idCounter: 1,
  todos: [{ id: 1, text: 'Build really cool todo app', completed: false }],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newCounter = state.idCounter + 1;
      const newTodo = {
        id: newCounter,
        text: action.payload.text,
        completed: false,
      };

      return {
        idCounter: newCounter,
        todos: [...state.todos, newTodo],
      };
    }
    case 'REMOVE_TODO': {
      const removeIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );

      const newTodos = [...state.todos];
      newTodos.splice(removeIndex, 1);

      return {
        ...state,
        todos: newTodos,
      };
    }

    case 'TOGGLE_TODO': {
      const toggleIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );

      const newTodos = [...state.todos];
      newTodos[toggleIndex].completed = !newTodos[toggleIndex].completed;

      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};
