import React from 'react';

export function Todo({ todo }) {
  if(todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

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
          <li
            key={t.get('id')}
            className='todo__item'
            onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
