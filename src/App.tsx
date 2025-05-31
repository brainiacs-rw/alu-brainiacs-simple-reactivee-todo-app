import {  useState } from 'react';
import './App.css'
import TodoItem from './todo-item';
interface TodoItem {
  id: number,
  title: string
}
function App() {
  const [currentValue, setCurrentValue] = useState<string>('')

  const [todoItems, setTodoItems] = useState<TodoItem[]>([])

  const addNewItem = () => {
    setTodoItems([...todoItems, { id: todoItems.length + 1, title: currentValue }])

  }

  return (
    <div className='p-10'>
      <h1>Todo</h1>
      <input type="text"
        className='h-[40px] border border-slate-200 outline-none px-4'
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <button className='py-2 px-4 bg-blue-700 text-white'
        onClick={() => addNewItem()}

      >Add +</button>

      <div>
        {
          todoItems.map(function (item) {
            return (
              <TodoItem id={item.id} title={item.title} />
            )
          })
        }
      </div>



    </div>
  )
}

export default App
