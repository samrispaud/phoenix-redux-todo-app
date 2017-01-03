import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          } />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: state.todos,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
