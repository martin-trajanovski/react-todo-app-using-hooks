import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../../actions';

function TodoItem({ todo }) {
  const todoClass = todo.completed ? 'completed' : '';
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todoClass}`}>
      <span
        className="todo-item-text"
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <FontAwesomeIcon
        className="float-right"
        color="#dc3545"
        icon="trash"
        onClick={() => dispatch(removeTodo(todo.id))}
      />
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
