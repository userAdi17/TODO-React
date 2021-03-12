import React from 'react';

const AddTodo = ({setTodos,input,setInput,todos}) => {
    const formHandler=(e)=>{
        e.preventDefault();
        setInput("");
        setTodos([...todos,{
            todoName: input,
            isActive: true,
            isImportant: false,
            id: Math.round(Math.random()*1000)
        }])
    };
    const inputHandler=(e)=>{
        setInput(e.target.value)
    };
    return (
        <div>

        <form onSubmit={formHandler} className='add-todo'>
            <input  required  value={input} className='add-input' type="text" placeholder='what needs to be done' onChange={inputHandler}/>
            <button type='submit' className='btn btn-outline-success'>add to do</button>
        </form>
        </div>
    );
};
export default AddTodo;