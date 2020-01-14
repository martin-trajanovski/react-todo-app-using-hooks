import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import { toggleTodo, removeTodo } from '../../actions';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => dispatch(toggleTodo(todo.id))}
          removeTodo={() => dispatch(removeTodo(todo.id))}
        />
      ))}
    </div>
  );
}
