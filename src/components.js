import React from 'react';
import Todo from './item';

export function TodoList(props) {
  const { todos, toggleTodo, addTodo } = props;
  const onSubmit = (e) => {
    const text = e.target.value;
    if(e.which === 13 && text.length > 0) {
      addTodo(text);
      e.target.value = '';
    }
  };

  const toggleClick = (id) => () => toggleTodo(id);

  return (
    <div className='todo'>
      <input type='text'
             className='todo__entry'
             placeholder='Add todo'
             onKeyDown={onSubmit} />
      <ul className='todo__list'>
        {todos.map(t => (
            <Todo todo={t} />
        ))}
      </ul>
    </div>
  );
}
