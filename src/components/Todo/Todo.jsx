import React from 'react'

const Todo = React.memo(
    ({ todoObj, setTodoList }) => {
        const completeHandler = (id) => {
            setTodoList(prev =>
                prev.map(el => el.id === id ? { ...el, isActive: !el.isActive } : el));
        };

        const editHandler = (id) => {
            setTodoList(prev =>
                prev.map(el => el.id === id ? { ...el, readOnly: !el.readOnly } : el));
        };

        const deleteHandler = (id) => {
            setTodoList(prev => prev.filter(el => el.id !== id));
        };

        const todoEditInputHandler = (id, e) => {
            setTodoList(prev =>
                prev.map(el => el.id === id ? { ...el, text: e.target.value } : el));
        };

        const toolbarOpenHandler = (id) => {
            setTodoList(prev =>
                prev.map(el => el.id === id ? { ...el, toolbarOpen: !el.toolbarOpen } : el));
        };
return (
    <li >
        <br />
        <span>{todoObj.date}</span>
        <input
            type="text"
            value={todoObj.text}
            onChange={(event) => todoEditInputHandler(todoObj.id, event)}
            className={`todo ${todoObj.isActive ? '' : 'done'} ${todoObj.readOnly ? '' : 'edit  '}`}
            readOnly={todoObj.readOnly}
        />
        <div>
            <button onClick={() => toolbarOpenHandler(todoObj.id)}>Toolbar</button>
        </div>
        <div className={`control-btns${todoObj.toolbarOpen ? ' toolbar-open' : ''}`}>
            <button className="edit" onClick={() => editHandler(todoObj.id)}>{todoObj.readOnly ? 'Edit' : 'Save'}</button>
            <button className="delete" onClick={() => deleteHandler(todoObj.id)}>Delete</button>
            <button className="done" onClick={() => completeHandler(todoObj.id)}>Done</button>
        </div>
    </li>
);
      }
)


export default Todo