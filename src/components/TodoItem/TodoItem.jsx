import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TodoItem({ todo, toggleTodo, removeTodo }) {
  const todoClass = todo.completed
    ? 'alert alert-success'
    : 'alert alert-primary';

  return (
    <div className="todo-item">
      <div className={todoClass} role="alert">
        <span className="todo-item-text" onClick={toggleTodo}>
          {todo.text}
        </span>
        <FontAwesomeIcon
          className="float-right"
          color="#dc3545"
          icon="trash"
          onClick={removeTodo}
        />
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
