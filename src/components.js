import React, { PureComponent } from 'react';
import Item from './item'


export class TodoList extends PureComponent {
  render() {
    const { todos, toggleTodo, addTodo } = this.props;
      console.log(todos);
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
            <Item todo={t}/>
          ))}
        </ul>
      </div>
    );
  }
}
