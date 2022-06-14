import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Store/todoReducer';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';


const Todo = () => {
    const [text,setText] = useState<string>('')
    const dispatch = useDispatch()

    const handleAction = () => {
        if(text.trim().length) {
            dispatch(addTodo(text))
            setText('')
        }
    }


    return (
        <div className='container content'>
            <br />
            <div className='inputFormTodo'>
            <NewTodoForm
                value={text}
                updateText={setText}
                handleAction={handleAction}
                 />
            </div>
                <br />
            <TodoList />            
        </div>
    );
};

export  {Todo};