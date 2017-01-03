/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

/*
 * action creators
 */

export function addTodo(text) {
  console.log('addTodo action creator', text)
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  console.log('completeTodo action creator', index)
  return { type: COMPLETE_TODO, index }
}
