import React from 'react'
import { CallIcon, EarphoneIcon, HillIcon, LoopIcon } from '../../assets/icons'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Teddy from "../../assets/images/Teddy.png"
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'


const Teachers = () => {
  const navigate = useNavigate()
  return (
    <>
    
    <div  autoComplete='off' className='w-[1130px] mx-auto pt-[20px]'>
        <div className='w-[1130px] flex items-center justify-end mb-[4px]'>
          <CallIcon/>
          <button className='py-[11px] ml-5  font-semibold text-[14px] leading-[18px] text-[#424242]'>Log out</button>
        </div>
      <div className='flex items-center justify-between py-[10px] mb-[24px]'>
        <h2 className='font-medium text-[20px] text-[#4F4F4F] leading-[25px]'>Teachers</h2>
        <Button onClick={() => navigate(PATH.addTeacher)} extraClass={"!w-[120px] !py-[12px]"} title={"Add Teachers"}/>
      </div>
      <div className='relative mb-[30px]'>
      <Input extraClass={"!w-full !pl-[48px] !font-medium !border-none "} placeholder={"Search for a student by name or email"}/>
      <span className='absolute top-4 bottom-0 my-auto left-[16px]'><LoopIcon/></span>
      </div>
      <div className='relative pb-[30px]'>
          <img className='mx-auto mb-[10px]' src={Teddy} alt="Teddy img" width={340} height={255} />
          <div className='text-center'>
            <h3 className='font-semibold text-[28px] leading-[35px] text-[#4F4F4F] mb-1'>No Teachers at this time</h3>
            <p className='font-medium text-[#4F4F4F] text-[14px]'>Teachers will appear here after they enroll in your school.  </p>
           </div>
           <div className='absolute right-[20px] bottom-[0px]'>
          <Button extraClass={"bg-[#152259] rounded-[30px] pr-[20px] !w-[181px] py-[21px]"} title={"Support"} />
          <span className='absolute  top-6 bottom-4 my-auto left-7'><EarphoneIcon/></span>
          <strong className='absolute top-6 bottom-4 my-auto right-7'><HillIcon/></strong>
        </div>
      </div>
    </div>
    </>
  )
}

export default Teachers