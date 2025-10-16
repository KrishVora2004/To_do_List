import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Task from './components/tasks'
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setshowfinished] = useState([])

  const togglefinished = () => {
    setshowfinished(!showfinished)
  }

  const handleedit = (task) => {
    console.log("edit", task)
    setTodo(task.todo)
    handledel(task.id)
  }

  const db = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handledel = (id) => {
    setTodos(todos.filter((task) => task.id !== id))
    db()
  }

  const handleadd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    db()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handlecheckbox = (id) => {
    const newTodos = todos.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTodos(newTodos);
    db()
  }

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      let existingTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(existingTodos)
    }
  }, [])

  return (
    <>
      <Navbar />

      <div className='container rounded-xl bg-violet-200 p-5 my-5 mx-auto min-h-fit'>
        <div className='Add_to_do'>
          <h2 className='text-lg font-bold'>Add To Do</h2>
          <div className='container flex p-2'>
            <input onChange={handleChange} value={todo} type="text" className='rounded-xl w-1/2' />
            <button onClick={handleadd} className='bg-green-500 mx-2 p-2 rounded-xl hover:bg-green-700'>Submit</button>
          </div>
        </div>

        <h1 className='font-bold text-xl my-3'>Your To Dos</h1>
        <input type="checkbox" onChange={togglefinished} className='mr-3' />finished


        <div className='todos p-2'>
          <div>
            {todos.map((task) => (
              (showfinished || !task.isCompleted) && <Task
                key={task.id}
                item={task}
                handleedit={() => handleedit(task)}
                handledel={() => handledel(task.id)}
                handlecheckbox={() => handlecheckbox(task.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default App