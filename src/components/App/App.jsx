import React, { useState,useEffect } from 'react';
import './App.css';
import Header from '../Header';
import TodoList from '../TodoList';
import AddForm from '../AddForm';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    setTodoList(todos)
  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todoList))
  },[todoList])

  return (
    <div>
      <Header todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <AddForm  todoList={todoList} setTodoList={setTodoList} setTodoText={setTodoText} todoText={todoText} />
    </div>
  );
}

export default App;