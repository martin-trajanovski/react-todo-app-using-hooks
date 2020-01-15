import React from 'react';
import { renderWithRedux } from '../../setupTests';
import AddTodo from '.';
import { fireEvent } from '@testing-library/react';

const initialTodosState = {
  todos: [{ id: 'test', text: 'Test todo', completed: false }],
};

test('should create todo successfully on form submit', async () => {
  const {
    container,
    getByPlaceholderText,
    store: { getState },
  } = renderWithRedux(<AddTodo />, { initialState: initialTodosState });

  const form = container.querySelector('form');
  const input = getByPlaceholderText('Add todo');
  const newTodoText = 'New test todo';
  fireEvent.change(input, { target: { value: newTodoText } });

  fireEvent.submit(form);

  const { todos } = getState();

  expect(todos.length).toBe(2);
  expect(todos[todos.length - 1].text).toBe(newTodoText);
});

test('should create todo successfully on button click', async () => {
  const {
    getByPlaceholderText,
    getByText,
    store: { getState },
  } = renderWithRedux(<AddTodo />, { initialState: initialTodosState });

  const input = getByPlaceholderText('Add todo');
  const button = getByText('Add todo');
  const newTodoText = 'New test todo';
  fireEvent.change(input, { target: { value: newTodoText } });

  fireEvent.click(button);

  const { todos } = getState();

  expect(todos.length).toBe(2);
  expect(todos[todos.length - 1].text).toBe(newTodoText);
});
