import React from 'react'
import logo from '../assets/react.svg'

const Navbar = () => {
    return (
        <div className='container bg-slate-900 text-zinc-50'>
            <div className='nav flex justify-around items-center p-2 '>
                <img src={logo} alt="" />
                <ul className='flex justify-around gap-3 cursor-pointer'>
                    <li className='hover:border-b-2 hover:border-zinc-50 h-[5vh]'>Home</li>
                    <li className='hover:border-b-2 hover:border-zinc-50 h-[5vh]'>Contact</li>
                    <li className='hover:border-b-2 hover:border-zinc-50 h-[5vh]'>Help</li>   
                </ul>
            </div>
        </div>
    )
}

export default Navbar
