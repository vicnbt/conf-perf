import React, { PureComponent } from 'react';


class TodoList extends React.Component {
  shouldComponentUpdate: () => true
  render() {
    const { todo } = this.props;
    return (
      <li
        key={todo['id']}
        className='todo__item'
      >
        {todo.isDone ? <strike>{todo['text']}</strike> : <span>{todo['text']}</span>}
      </li>
    );
  }
}

export default TodoList;
