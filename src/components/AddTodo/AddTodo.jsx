import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      text: value,
      completed: false,
    };

    addTodo(newTodo);

    setValue('');
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            aria-label="Add todo"
            aria-describedby="basic-addon2"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-primary">
              Add todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
