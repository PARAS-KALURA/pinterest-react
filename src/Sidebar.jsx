import React from 'react'
import { NavLink } from 'react-router-dom';
import { Bell, ClipboardPen, ClipboardPlus, Compass, House, MessageCirclePlus, Settings, User as UserIcon } from 'lucide-react';



const Sidebar = () => {
  return (
    <div className='min-h-screen w-28 border border-gray-300 pt-10 pl-10' >

        <div>
        <UserIcon size={40}  className='text-red-400 cursor-pointer hover:text-red-700 mb-17' />

         <NavLink to="/" >
        <House  size={40}  className='text-black-400 cursor-pointer mb-14 transition-all hover:scale-110 ' /> 
        </NavLink>

        <Compass size={40}  className='text-black-400 cursor-pointer mb-14 hover:scale-110' />
        <ClipboardPen  size={40}  className='text-black-400 cursor-pointer mb-14 hover:scale-110' />
        <ClipboardPlus size={40}  className='text-black-400 cursor-pointer mb-14 hover:scale-110' />
        <Bell size={40}  className='text-black-400 cursor-pointer mb-14 hover:scale-110' />
        <MessageCirclePlus size={40}  className='text-black-400 cursor-pointer mb-14 hover:scale-110' />

         <NavLink to='/settings' > 
        <Settings size={40}  className='text-black-400 cursor-pointer mb-14 hover:scale-110' />
          </NavLink>

        </div>


    </div>
  )
}

export default Sidebar