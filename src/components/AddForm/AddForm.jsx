import React from 'react'

const AddForm = ({ todoList, setTodoList, todoText, setTodoText }) => {
    const setDateHendler = () => {
      const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      const day = new Date().getDate();
      const month = months[new Date().getMonth()];
      const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
      return `${month} ${day} ${time}`;
    }
    
  const submitHandler = (e) => {
    e.preventDefault();
    const newId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1;
    setTodoList([...todoList, {
      id: newId,
      text: todoText,
      isActive: true,
      readOnly: true,
      date: setDateHendler(),
      toolbarOpen: false
    }]);
    setTodoText('');
  };

  const inputHandler = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input onChange={inputHandler} placeholder='Введите задачу' value={todoText} />
      <button type='submit'>add</button>
    </form>
  )
}

export default AddForm
