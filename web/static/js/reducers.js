import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO } from './actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log('ADD_TODO reducer', action, state)
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      console.log('COMPLETE_TODO reducer', action, state)
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
