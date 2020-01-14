import { todoReducer, initialState } from './todoReducer';
import { addTodo, removeTodo, toggleTodo } from '../actions';

test('should add todo successfully', () => {
  const newTodo = { text: 'Meet friend for lunch' };
  const newState = todoReducer(initialState, addTodo(newTodo));

  expect(newState.length).toEqual(2);
  expect(newState[1].text).toEqual(newTodo.text);
});

test('should remove todo successfully', () => {
  const newState = todoReducer(initialState, removeTodo(initialState[0].id));
  const finalState = [];

  expect(newState.length).toEqual(0);
  expect(newState).toEqual(finalState);
});

test('should complete todo successfully', () => {
  const newState = todoReducer(initialState, toggleTodo(initialState[0].id));

  expect(newState[0].completed).toEqual(true);
});
