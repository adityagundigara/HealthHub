import React, { useState } from 'react'
import {assets} from "../assets/assets_frontend/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate = useNavigate();
  const [showMenu,setShowMenu]=useState(false);
  const [token,setToken]=useState(true);

  return (
    <div className='flex items-center justify-between py-4 text-sm mb-5 gap-4 border-b border-b-gray-400'>
      <img onClick={()=>{navigate('/')}} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-center gap-5 font-medium text-center'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctor'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center'>
        {
          token
          ? <div className={'flex items-center gap-2 group relative cursor-pointer'}>
            <img className={'w-8  rounded-full'} src={assets.profile_pic} alt="" />
            <img className={'w-3'} src={assets.dropdown_icon} alt="" />
            <div className={'absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '}>
              <div className={'min-w-36 bg-stone-100 rounded flex flex-col gap-2 p-2'}>
                <p onClick={()=>navigate('my-profile')} className={'hover:text-black'}>My Profile</p>
                <p onClick={()=>navigate('my-appointments')} className={'hover:text-black'}>My Appoinments</p>
                <p onClick={()=>setToken(false)} className={'hover:text-black'}>Logout</p>
              </div>
            </div>
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-primary rounded-full px-8 py-3 text-white font-medium hidden md:block'>Create Account</button>
        }
      </div>
    </div>
  )
}

export default Navbar
