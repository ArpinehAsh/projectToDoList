import { useEffect } from 'react';
import deleteTodoModalStyles from './style.module.css'

function ConfirmDeleteTodoModal({ modal, toggleModal, onDeleteTodo, todo }){

    useEffect(() => {
        if(modal){
            document.body.classList.add('activeModal')
        }else{
            document.body.classList.remove('activeModal') 
        }
    }, [modal])

    return (
        <div className={deleteTodoModalStyles.modal}>
            <div 
                onClick={toggleModal}
                className={deleteTodoModalStyles.overlay}></div>
            <div className={deleteTodoModalStyles.modalContent}>
                <p>Are you sure you want to delete?</p>
                <button 
                    onClick={onDeleteTodo}
                    className={deleteTodoModalStyles.btnYes}>Yes</button>
                <button 
                    onClick={toggleModal}
                    className={deleteTodoModalStyles.btnNo}>No</button>
            </div>
        </div>
    )
}

export default ConfirmDeleteTodoModal;