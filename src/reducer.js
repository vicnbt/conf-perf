import { List, Map } from 'immutable';

const init = ([]);

export default function(state=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      const arr = state.slice();
      arr.push(action.payload);
      return arr;
    case 'TOGGLE_TODO':
      return state;
      /*return state.map(t => {
        if(t.get('id') == action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });*/
    default:
      return state;
  }
}