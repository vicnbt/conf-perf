import React, { PureComponent } from 'react';


class TodoList extends PureComponent {
    render() {
        const { todo } = this.props;

        return (

            <li
                key={todo.get('id')}
                className='todo__item'
            >
                {todo.isDone ? <strike>{todo.get('text')}</strike> : <span>{todo.get('text')}</span>}
            </li>
        );
    }
}

export default TodoList;
