import React from 'react';
import './App.scss';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Todo app with hooks</h4>
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
