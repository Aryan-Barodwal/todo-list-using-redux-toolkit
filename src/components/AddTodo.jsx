import React, { useState, useEffect } from 'react'
import "../components/Todosname.css"

// import { Loader } from 'rsuite';

import { useDispatch, useSelector } from 'react-redux'

import { addtodo } from '../redux/counter/counterSlice'
import { useForm } from "react-hook-form"

const AddTodo = ({ editformvisibility, edittodo, cancelUPDATE }) => {
  const [input, setinput] = useState('');

  const dispatch = useDispatch();  // iske matlab ye ha ki hame value ko bhejna ha !! jse hm order ko dispatch karte ha!!


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, (t * 1000));
    })
  }

  const onSubmit = async (data) => {
    await delay(1)

    dispatch(addtodo(input));
    setinput('')
  }

  useEffect(() => {
    setinput(edittodo.text);
  }, [edittodo])

  const onUpdate = async(data) => {
    await delay(1)
    dispatch(addtodo(input))
    setinput('')

  }



  return (
    <div className='form flex justify-center flex-col items-center'>
      <h1 className='mb-4 font-bold text-2xl'>TODO LIST</h1>

      {editformvisibility === false ?

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>

          <input type="text" placeholder=' Enter the todo' value={input || ""} className='border border-slate-950'

            {...register("todos", {
              required: {
                value: true,
                message: "This field is required"
              },
              maxLength: {
                value: 14,
                message: "Not more than 14"
              }
            })}

            onChange={(e) => setinput(e.target.value)} />

          {errors.todos ? <span className='text-red-700 text-sm'>{errors.todos.message}</span> : ""}

          {isSubmitting ? <div className="loader"></div> : ""}
        
          <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2' type="sumbit">Add Todo</button>

        </form>
        :
        <form onSubmit={handleSubmit(onUpdate)} className='flex flex-col justify-center items-center'>

          <input type="text" placeholder=' Enter the todo' value={input || ""} className='border border-slate-950'

            {...register("exampleRequired",
              {
                required: {
                  value: true,
                  message: "This field is required"

                },
                maxLength: {
                  value: 14,
                  message: "Not more than 14"
                }
              })}

            onChange={(e) => setinput(e.target.value)} /> <br />

          {errors.exampleRequired ? <span className='text-red-700 text-sm'>{errors.exampleRequired.message}</span> : ""}

          {isSubmitting ? <div className="loader"></div> : ""}

          <div className='flex '>
            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' type="sumbit">Update Todo</button>

            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2' type='button' onClick={cancelUPDATE}> BACK </button>
          </div>

        </form>

      }
    </div>
  )
}

export default AddTodo


/* HTML: <div class="loader"></div> */
