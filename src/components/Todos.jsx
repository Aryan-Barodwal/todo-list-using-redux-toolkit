import React from 'react'

import "./Todotodo.css"

import { useSelector, useDispatch } from 'react-redux'
import { addcheckboxclass, removetodo, deleteall } from "../redux/counter/counterSlice"

const Todos = ({ handleclick, editformvisibility }) => {
  const dispatch = useDispatch();  //Jse hm order ko dispatch kartte ha!!

  const todos = useSelector((state) => state.counter.todos)  //yha pe hm values ko select kar rhe ha!!!
  return (
    <div className='flex flex-col justify-center'>
      <ul className='flex flex-col justify-center gap-2'>

        {todos.map((todo) => (
          <>
            <li key={todo.id} className='flex flex-row justify-between gap-7 border border-slate-600 rounded-md p-2'>
              <div className='flex gap-1'>
                {editformvisibility === false &&

                  <input className='border border-gray-50 rounded-3xl' type="checkbox" value={todo.completed} onChange={() => dispatch(addcheckboxclass(todo.id))}></input>

                }

                <p className={todo.completed === true ? 'line-through' : 'no-underline'}>
                  {todo.text}
                </p>

              </div>
              {editformvisibility === false &&
                <div className='flex gap-2'>
                  <button onClick={() => dispatch(removetodo(todo.id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                      <path d="M10.247 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7531 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1181 4.37524 16.3302 4.25283C17.3965 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7471 7.66981C19.6247 7.88183 19.4209 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6247 16.1179 19.7471 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3964 20.3626 16.3302 19.7469C16.1181 19.6246 15.9143 19.4208 15.5067 19.013L13.7533 17.2598L13.7533 17.2597C12.9271 16.4336 12.5135 16.02 12.0001 16.02C11.4866 16.02 11.073 16.4336 10.2468 17.2598L10.2468 17.2598L8.49349 19.013C8.08586 19.4208 7.88204 19.6246 7.67001 19.7469C6.60373 20.3626 5.7253 19.7516 4.98689 19.013C4.24836 18.2746 3.6374 17.3963 4.25303 16.3299C4.37545 16.1179 4.57926 15.9141 4.98689 15.5065L6.7404 13.7529C7.56678 12.9266 7.97996 12.5134 7.97996 11.9999C7.97996 11.4864 7.56656 11.073 6.74019 10.2466L4.98681 8.49321C4.57924 8.08563 4.37544 7.88183 4.25303 7.66981C3.63737 6.60345 4.24841 5.72518 4.98689 4.98669C5.72539 4.24821 6.60365 3.63716 7.67001 4.25283C7.88203 4.37524 8.0859 4.5791 8.49348 4.98668L8.49349 4.98669L10.247 6.7402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button onClick={() => handleclick(todo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                      <path d="M16.9459 3.17305C17.5332 2.58578 17.8268 2.29215 18.1521 2.15173C18.6208 1.94942 19.1521 1.94942 19.6208 2.15173C19.946 2.29215 20.2397 2.58578 20.8269 3.17305C21.4142 3.76032 21.7079 4.05395 21.8483 4.37925C22.0506 4.8479 22.0506 5.37924 21.8483 5.84789C21.7079 6.17319 21.4142 6.46682 20.8269 7.05409L15.8054 12.0757C14.5682 13.3129 13.9496 13.9315 13.1748 14.298C12.4 14.6645 11.5294 14.7504 9.78823 14.9222L9 15L9.07778 14.2118C9.24958 12.4706 9.33549 11.6 9.70201 10.8252C10.0685 10.0504 10.6871 9.43183 11.9243 8.19464L16.9459 3.17305Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                      <path d="M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              }
            </li >
          </>
        ))}


        <div className={todos.length > 2 ? "block w-full flex justify-center " : "hidden"}>
          <button onClick={() => dispatch(deleteall())} className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2' >
            Delete All
          </button>

        </div>


      </ul>

    </div >
  )
}

export default Todos
