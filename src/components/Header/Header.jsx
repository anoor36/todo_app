import React from 'react';

const Header = ({ todoList }) => {
  const filterTodoList = (str) => {
    if (str === 'done') {
        return todoList.filter(el => !el.isActive).length;
    } else {
        return todoList.filter(el => el.isActive).length;
    }
  };

  return (
    <div>
      <h2>Todo</h2>
      <p><span>{filterTodoList('more')}</span> more</p>
      <p><span>{filterTodoList('done')}</span> done</p>
    </div>
  );
}

export default Header;