import { todoReducer, initialState } from './todoReducer';

test('should add todo successfully', () => {
  const action = {
    type: 'ADD_TODO',
    payload: { text: 'Meet friend for lunch' },
  };

  const newState = todoReducer(initialState, action);

  const finalState = {
    idCounter: 2,
    todos: [
      { id: 1, text: 'Build really cool todo app', completed: false },
      { id: 2, text: 'Meet friend for lunch', completed: false },
    ],
  };

  expect(newState).toEqual(finalState);
});

test('should remove todo successfully', () => {
  const action = { type: 'REMOVE_TODO', payload: { id: 1 } };
  const newState = todoReducer(initialState, action);
  const finalState = { idCounter: 1, todos: [] };

  expect(newState).toEqual(finalState);
});

test('should complete todo successfully', () => {
  const action = { type: 'TOGGLE_TODO', payload: { id: 1 } };

  const newState = todoReducer(initialState, action);

  const finalState = {
    idCounter: 1,
    todos: [{ id: 1, text: 'Build really cool todo app', completed: true }],
  };

  expect(newState).toEqual(finalState);
});
