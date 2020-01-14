import { ID } from '../helpers/idGenerator';

export const initialState = [
  { id: '_deihtwi9q', text: 'Build really cool todo app', completed: false },
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: ID(),
        text: action.todo.text,
        completed: false,
      };

      return [...state, newTodo];
    }
    case 'REMOVE_TODO': {
      const removeIndex = state.findIndex(todo => todo.id === action.id);

      const newTodos = [...state];
      newTodos.splice(removeIndex, 1);

      return newTodos;
    }

    case 'TOGGLE_TODO': {
      const toggleIndex = state.findIndex(todo => todo.id === action.id);

      const newTodos = [...state];
      newTodos[toggleIndex].completed = !newTodos[toggleIndex].completed;

      return newTodos;
    }
    default:
      return state;
  }
};
