import TodoItem from "../TodoItem";
import { useMemo } from 'react';

function TodoList({todos, onChange, onDelete, hiddenCompleted}) {

    const todosToShow = useMemo(() => {
        if(hiddenCompleted) {
            return todos.filter(item => {
                if(!item.isCompleted) {
                    return item
                }
                return null
            })
        }
        return todos;
    }, [hiddenCompleted, todos]);

    return (
        <div>
            {
                todosToShow.map((todo) =>{
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;