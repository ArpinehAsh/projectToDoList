import { useState } from 'react';
import ConfirmDeleteTodoModal from '../ConfirmDeleteTodoModal';
import todoItemStyle from './style.module.css'

function TodoItem({todo, onChange, onDelete}) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const onDeleteTodo = () => onDelete(todo);

    return (
            <div className={todoItemStyle.todoBlock}>
                <div className={todoItemStyle.todoBlockNamePart}>
                    <label className={todoItemStyle.checkboxLabel}>
                        <input 
                            className={todoItemStyle.checkbox}
                            type = "checkbox"
                            checked={todo.isCompleted} 
                            onChange={(e)=>{
                                onChange({
                                    ...todo,
                                    isCompleted: e.target.checked
                                })
                            }}
                        />
                        <span className={todoItemStyle.checkmark}></span>
                    </label>
                    <p className={todo.isCompleted ? todoItemStyle.isCompleted : ''}>{todo.text}</p>
                </div>
                <button 
                    onClick = {toggleModal}
                    className={todoItemStyle.btnX}
                >X</button>
                
                {
                    modal && <ConfirmDeleteTodoModal
                        modal={modal}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        toggleModal={toggleModal} />
                }
            </div>
        

    )

}

export default TodoItem;