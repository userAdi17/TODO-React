import React from 'react';
import Todo from '../todo';
const TodoList = ({todos,setTodos,isActive,setActive,filteredTodos,searchInputText}) => {

    return (
        <ul className='list-group'>{filteredTodos.filter((todo)=>todo.todoName.includes(searchInputText)).map((todoItem,idx) => <Todo
            isActive={isActive} setActive={setActive} idx={idx}
            todoItem={todoItem}   setTodos={setTodos} todos={todos} key={todoItem.id} name={todoItem.todoName}/>)}

        </ul>

    );
};

export default TodoList;