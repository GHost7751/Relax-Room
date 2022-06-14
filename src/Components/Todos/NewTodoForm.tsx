import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

interface NewTodoFormProps {
    value : string,
    updateText : (str : string) => void,
    handleAction: () => void
}

const NewTodoForm:FC<NewTodoFormProps> = ({value , updateText, handleAction}) => {
    return (
        <label>
            <input 
            placeholder='new todo'
            value={value}
            onChange={(e) => updateText(e.target.value)} 
            />

            <Button 
            onClick={handleAction}>Add Todo</Button>
        </label>
    );
};

export default NewTodoForm;