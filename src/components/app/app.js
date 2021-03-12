import React, {useState, useEffect} from 'react';
import TodoList from '../todoList';
import Header from '../header';
import SearchPanel from "../search-panel";
import AddTodo from "../addTodo";
import './app.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [searchInputText, setSearchInputText] = useState('');
    useEffect(() => {
        getItem()
    }, []);
    useEffect(() => {
        filter();
        saveItems();
        Array.from(document.getElementsByClassName('statusBtn')).map((btn) => {
            if (btn.value === status) {
                btn.classList.add('active')
            } else {
                btn.classList.remove('active')
            }
        })
    }, [status, todos, searchInputText]);
    const saveItems = () => {
        localStorage.setItem('todo', JSON.stringify(todos));
        localStorage.setItem('btnStatus', status);
    };
    const getItem = () => {
        setTodos(JSON.parse(localStorage.getItem('todo')));
        setStatus(localStorage.getItem('btnStatus'));


    };
    const filter = () => {
        switch (status) {
            case 'active':
                setFilteredTodos(todos.filter((todo) => todo.isActive));
                break;
            case 'done':
                setFilteredTodos(todos.filter((todo) => !todo.isActive));
                break;
            default:
                setFilteredTodos(todos);
        }
    };
    return (
        <div className='main'>
            <div className="todo-container">
                <Header todos={todos}/>
                <SearchPanel
                    setSearchInputText={setSearchInputText}
                    searchInputText={searchInputText}
                    setStatus={setStatus}/>
                {todos.length === 0 ? <div className='text-center'>Here should be text</div> :
                    <TodoList searchInputText={searchInputText} filteredTodos={filteredTodos} setTodos={setTodos}
                              todos={todos}/>}
                <AddTodo todos={todos} input={input} setInput={setInput} setTodos={setTodos}/>
            </div>
        </div>
    );
}

export default App;