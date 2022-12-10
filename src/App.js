import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import HideCompleted from './components/HideCompleted';
import EmptyState from './components/EmptyState';
import './App.css';


function App() {
  
  const [todos, setTodos] = useState([]);
  const [hiddenCompleted, setHiddenCompleted] = useState(false);
  
  useEffect(() =>{
    setTodos(JSON.parse(window.localStorage.getItem('todos')) || [])
  }, [])

  const storeTodosInLocalStorage = (data) => {
    window.localStorage.setItem('todos', data)
  }

  const onDeleteTodo = (todo) => {
    const filteredTodos = todos.filter((t) => t.id !== todo.id)
    setTodos(filteredTodos);
    storeTodosInLocalStorage(JSON.stringify(filteredTodos))
  }


  const onAddTodo = (text) =>{
    if(!text) return
    const allTodos = [
      ...todos,
      {
        id: Math.random(),
        text: text,
        isCompleted: false
      }
    ];
    setTodos(allTodos);
    storeTodosInLocalStorage(JSON.stringify(allTodos))
  }

  const onChangeTodo = changedTodo => {
      const allTodos = todos.map((todo) =>{
        if(todo.id === changedTodo.id){
          return changedTodo;
        }
        return todo;
      })
      setTodos(allTodos);
      storeTodosInLocalStorage(JSON.stringify(allTodos))
  }

  const onHideCompletedTodos = () => setHiddenCompleted((oldVal) => !oldVal);

  return (
    <div className = "container">  
      <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '50px'}}>
        { 
          todos?.length !== 0 && (
            <HideCompleted
                todos={todos} 
                onHideCompleted = {onHideCompletedTodos}
            />
          )
        }
      </div>
      <TodoForm onAdd={onAddTodo}/>
      { todos?.length === 0 && <EmptyState /> }
      {
          todos?.length !== 0 && <div> 
              <TodoList 
                hiddenCompleted={hiddenCompleted}
                todos={todos}
                onDelete={(todo)=> onDeleteTodo(todo)}
                onChange={onChangeTodo}
          />
        </div>
      }
    </div>
  )
}

export default App;
