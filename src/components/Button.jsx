import React from 'react'

const Button = ({title, onClick, type, extraClass,isLoading, loadingImg ,}) => {
  return (
    <button  className={`w-[250px] text-center text-white hover:opacity-55 duration-300 cursor-pointer  rounded-[5px] py-[12px] font-bold ${extraClass} bg-[#2D88D4]  text-[14px]`} onClick={onClick} type={type}> {}
       {isLoading ? <img className='mx-auto scale-[1.5]' src={loadingImg} alt="loading img" width={20} height={20} /> : title }
    </button>
  )
}

export default Button