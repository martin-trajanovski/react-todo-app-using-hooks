import React, { useReducer } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import { initialState, todoReducer } from '../../reducers/todoReducer';

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos } = state;

  return (
    <div className="todo-list">
      <AddTodo
        addTodo={todo => dispatch({ type: 'ADD_TODO', payload: todo })}
      />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() =>
            dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } })
          }
          removeTodo={() =>
            dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } })
          }
        />
      ))}
    </div>
  );
}
