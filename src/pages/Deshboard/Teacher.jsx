import React from 'react'
import { CallIcon, LoopIcon } from '../../assets/icons'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Kristina from "../../assets/images/kristina.png"
import Leslie from "../../assets/images/leslie.png"
import { IoIosMore } from "react-icons/io"
import { MdDeleteForever } from "react-icons/md"
import { RxUpdate } from "react-icons/rx"
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'

const Teacher = () => {
  const navigate = useNavigate()
  return (
    <>
     <div  className='w-[1130px] mx-auto pt-[20px]'>
        <div className='w-[1130px] flex items-center justify-end mb-[4px]'>
          <CallIcon/>
          <button className='py-[11px] ml-5  font-semibold text-[14px] leading-[18px] text-[#424242]'>Log out</button>
        </div>
      <div className='flex items-center justify-between py-[10px] mb-[24px]'>
        <h2 className='font-medium text-[20px] text-[#4F4F4F] leading-[25px]'>Teachers</h2>
        <Button extraClass={"!w-[120px] !py-[12px]"} title={"Add Teachers"}/>
      </div>
      <div className='relative mb-[30px]'>
      <Input extraClass={"!w-full !pl-[48px] !font-medium !border-none "} placeholder={"Search for a student by name or email"}/>
      <span className='absolute top-4 bottom-0 my-auto left-[16px]'><LoopIcon/></span>
      </div>
      <div>
      <table class="w-full bg-white rounded-[30px]">
            <thead>
              <tr>
                <th class="py-[12px] text-[#424242] font-bold text-start  text-[20px]">Images</th>
                <th class="py-[12px] text-[#424242] font-bold text-start  text-[20px]">Name</th>
                <th class="py-[12px] text-[#424242] font-bold text-start text-[20px]">Subject</th>
                <th class="py-[12px] text-[#424242] font-bold text-start text-[20px]">Class</th>
                <th class="py-[12px] text-[#424242] font-bold text-start text-[20px]">Email address</th>
                <th class="py-[12px] text-[#424242] font-bold text-start text-[20px]">Gender</th>
                <th class="py-[12px] text-[#424242] font-bold text-start text-[20px]">Management</th>
              </tr>
            </thead>
            <tbody> 
              <tr>
                  <td class="py-[20px] text-[20px]">
                    <img src={Kristina} alt="Kristina Img" width={24} height={24} />
                  </td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Bobur</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Algebra</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">N2</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Xux1344@gmail.com</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Male</td>
                  <td class="py-[20px]  font-medium text-[20px]">
                    <button onClick={()=> navigate(PATH.about)} className='px-2'><IoIosMore/></button>
                    <button className='px-5'><MdDeleteForever/></button>
                    <button><RxUpdate/></button>
                  </td>
              </tr>
              <tr>
                  <td class="py-[20px] text-[20px]">
                    <img src={Leslie} alt="Kristina Img" width={24} height={24} />
                  </td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Alisher</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Rus tili</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">N4</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Bobur1242@gmail.com</td>
                  <td class="py-[20px] text-[#4F4F4F] font-medium text-[20px]">Female</td>
                  <td class="py-[20px]  font-medium text-[20px]">
                    <button onClick={()=> navigate(PATH.about)} className='px-2'><IoIosMore/></button>
                    <button   className='px-5'><MdDeleteForever/></button>
                    <button><RxUpdate/></button>
                  </td>
              </tr>
            
            </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default Teacher