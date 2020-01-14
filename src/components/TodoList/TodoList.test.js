import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

test('should display todos correctly', () => {
  const { container } = render(<TodoList />);
  const todoList = container.querySelectorAll('.todo-item');

  expect(todoList.length).toEqual(1);
});

test('should render todos correctly', () => {
  const tree = renderer.create(<TodoList />).toJSON();

  expect(tree).toMatchSnapshot();
});
