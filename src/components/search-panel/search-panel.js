import React from 'react';

const SearchPanel = ({setStatus, setSearchInputText}) => {
    const statusHandler = (e) => {
        const all = document.getElementById('all');
        const active = document.getElementById('active');
        const done = document.getElementById('done');
        const addActiveClass = (mainEl, el2, el3) => {
            mainEl.addEventListener('click', () => {
                if (!mainEl.className.includes('active')) {
                    mainEl.classList.add('active');
                    el2.classList.remove('active');
                    el3.classList.remove('active');
                }
            })
        };
        addActiveClass(all, active, done);
        addActiveClass(active, all, done);
        addActiveClass(done, active, all,);
        setStatus(e.target.value)
    };
    const searchInputHandler = (e) => {
        setSearchInputText(e.target.value)
    };
    return (
        <div>
            <div className='search-panel'>
                <input className='search-input mb-3' onChange={searchInputHandler} type="text"
                       placeholder='type a todo'/>
                <div className='btn-group'>
                    <button type='button' id='all' onClick={statusHandler} value='all'
                            className='statusBtn btn btn-outline-info'>all
                    </button>
                    <button type='button' id='active' onClick={statusHandler} value='active'
                            className='statusBtn btn btn-outline-info'>active
                    </button>
                    <button type='button' id='done' onClick={statusHandler} value='done'
                            className='statusBtn btn btn-outline-info'>done
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SearchPanel;