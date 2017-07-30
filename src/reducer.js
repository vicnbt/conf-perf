import { List, Map } from 'immutable';

const init = List([]);

export default function(state=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state.push(
        Map(action.payload)
      );
    case 'TOGGLE_TODO':
      return state.map(t => {
        if(t.get('id') == action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return state;
  }
}