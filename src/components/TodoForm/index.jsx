import { useState } from "react";
import TodoFormStyle from './style.module.css'

function TodoForm({onAdd , todos, isCompleted}) {
    const [text, setText] = useState('')
    const [error, setError] = useState(false);

    const onInputChange = (event) => {
        const hasError = event.target.value.length >= 1 
        setError(hasError);        
        setText(event.target.value);
        
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onAdd(text)
        setText('');

    }

    return(
        <>
            <form 
                className={TodoFormStyle.form}
                onSubmit={onFormSubmit}
            >
                <div className={TodoFormStyle.formContent}>
                    <label className={TodoFormStyle.label}>Task</label>
                    <input
                        placeholder="Write here"
                        className={`${TodoFormStyle.todoInput} ${error ? TodoFormStyle.error : ''}`}
                        type = 'text' 
                        maxLength={54} 
                        value={text} 
                        onChange = {onInputChange}
                    />
                    {error && <p className={TodoFormStyle.errorMessage}>Task content can contain max 54 characters</p>}
                </div>    
                <button className={TodoFormStyle.addBtn}>Add</button>
            </form>
        </>

    )

}

export default TodoForm;