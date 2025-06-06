import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus, } from "react-icons/hi2";
import { HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';
import profile from "./../assets/Images/profile.png"
function Header() {
  const[toggle,settoggle]=useState(false)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]
  return (
    <div className='flex items-center gap-8 justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img src={logo} className=' w-[80px] md:w-[115px] object-cover ' />
        <div className='hidden md:flex gap-8 '>
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-8 '>
          {menu.map((item, index) => index < 3 && (
            <HeaderItem name={''} Icon={item.icon} />
          ))}
          <div onClick={()=>settoggle(!toggle)} className='md:hidden'>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle?<div className='absolute mt-2 bg-[#121212] border-gray-700 border-[1px] p-3 px-5 py-4'>
              {menu.map((item, index) => index > 2 && (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
            </div>:null}
          </div>

        </div>
      </div>
      <img src={profile} className='w-[40px]  hidden md:block rounded-full' />
    </div>
  )
}

export default Header
