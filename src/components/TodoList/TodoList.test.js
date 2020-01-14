import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '.';
import { renderWithRedux } from '../../setupTests';

test('should display todos correctly', () => {
  const { container } = renderWithRedux(<TodoList />);
  const todoList = container.querySelectorAll('.todo-item');

  expect(todoList.length).toEqual(1);
});

test('should render todos correctly', () => {
  const { wrappedWithProvider } = renderWithRedux(<TodoList />);
  const tree = renderer.create(wrappedWithProvider).toJSON();

  expect(tree).toMatchSnapshot();
});
