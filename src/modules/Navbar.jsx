import React from 'react'
import School from "../assets/images/School.png"
import {navbarList} from "../hooks/useRoute" 
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[20%] bg-[#152259] h-[100vh] overflow-y-auto'>
        <div className='py-[30px]  px-[55px] border-b-[2px] border-[#BDBDBD]'>
            <img className='mb-[12px] mx-auto' src={School} alt="School img" width={65} height={65} />
            <h2 className='font-semibold text-[16px] text-center text-white'>Udemy Inter. school</h2>
        </div>
        <nav className=' flex flex-col space-y-[8px] w-[250px]  mt-[20px] pl-5'>
        {navbarList.map(item => (
          <NavLink className={"flex pl-[28px] items-center relative py-[12px] gap-5"} key={item.id} to={item.path}>
            {item.icon}
            <span className='font-semibold text-white text-[16px]'>{item.title}</span>
          </NavLink>
        ))}
        </nav>
    </div>
  )
}

export default Navbar