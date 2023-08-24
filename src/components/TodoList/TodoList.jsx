import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todoList,setTodoList}) => {
    return (
        <ul>
            {todoList.map((obj) => (
              <Todo todoObj={obj}setTodoList={setTodoList}/>
            ))}
        </ul>
    );
}

export default TodoList;
