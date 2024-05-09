import { useState } from 'react'

import Navbar from './components/Navbar'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useDispatch } from 'react-redux'
import { deletetodo } from './redux/counter/counterSlice'
import './App.css'

function App() {
  const [editformvisibility, seteditformvisibility] = useState(false)

  const [edittodo, setedittodo] = useState('')
  const dispatch = useDispatch();

  const handleclick = (todo) => {
    seteditformvisibility(true);

    dispatch(deletetodo(todo.id));
    setedittodo(todo);

  }

  const cancelUPDATE = () => {
    seteditformvisibility(false);
  }

  return (
    <>
      <Navbar />

      <div className="mt-24 mb-4 text-xl flex justify-center items-center flex-col gap-4 ">
        <AddTodo cancelUPDATE={cancelUPDATE} editformvisibility={editformvisibility} edittodo={edittodo} setedittodo={setedittodo} />
        <Todos handleclick={handleclick} editformvisibility={editformvisibility} />
      </div>

      <footer className='fixed bottom-0 '>
        <h2 className='w-screen m-auto text-center bg-[#FFFFFF]'>
          Follow Aryan <i class="ri-twitter-x-line"></i> <i class="ri-linkedin-fill"></i>
        </h2>
      </footer>
    </>

// box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  )
}

export default App
