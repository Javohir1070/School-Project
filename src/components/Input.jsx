import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Input = ({type, placeholder, name, extraClass, onChange}) => {
  const [showPass, setShowPass] = useState(false)
  return (
    <>
    {type == "password" ?
      <label className='relative '>
          <input onChange={onChange} className={`w-[250px] ${extraClass} rounded-[5px] outline-none py-[13px] pl-[13px] pr-[30px]  border-[2px] border-[#A7A7A7] text-[14px] font-medium text-[#8A8A8A] placeholder:text-[#8A8A8A] placeholder:font-medium`} name={name} placeholder={placeholder}  type={showPass ? "text" :  type} />
        <div onClick={() => setShowPass(!showPass)} className='absolute top-5 my-auto right-3 cursor-pointer'>
            {showPass ?  <FaEyeSlash/> : <FaEye/>}
        </div>
      </label>
    :
      <input className={`w-[250px] ${extraClass} rounded-[5px] outline-none py-[13px] pl-[13px] pr-[30px]  border-[2px] border-[#A7A7A7] text-[14px] font-medium text-[#8A8A8A] placeholder:text-[#8A8A8A] placeholder:font-medium`} name={name} placeholder={placeholder}  type={type} />
    }
    </>
  )
}

export default Input