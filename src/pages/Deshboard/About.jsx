import React from 'react'
import { CallIcon } from '../../assets/icons'
import Kristin from "../../assets/images/kristin.png"
import Student from "../../assets/images/student.png"
import Call from "../../assets/images/call.png"
import Sms from "../../assets/images/sms.png"


const About = () => {
  return (
    <div className='w-[1130px] mx-auto pt-[20px]'>
             <div className='w-[1130px] flex items-center justify-end mb-[4px]'>
          <CallIcon/>
          <button className='py-[11px] ml-5  font-semibold text-[14px] leading-[18px] text-[#424242]'>Log out</button>
            </div>
            <div className='flex w-[735px] mx-auto items-center justify-between gap-[50px] py-[66px]'>
                <div className='w-[280px]'>
                    <img className='mb-[50px]' src={Kristin} alt="img" width={280} height={280} />
                    <h2 className='font-bold text-[#1A1A1A] text-[16px] text-center '>Kristin Watson</h2>
                    <p className='text-[#4F4F4F] text-[12px] text-center font-medium'>tim.jennings@example.com</p>
                    <div className='flex items-center justify-between mt-[40px]'>
                        <img src={Student} alt="Student img" width={60} height={60} />
                        <img src={Call} alt="Call img" width={60} height={60} />
                        <img src={Sms} alt="Sms img" width={60} height={60} />
                    </div>
                </div>
                <div className='w-[355px]'>
                    <span className='block text-[#1A1A1A] text-[16px] font-semibold'>About</span>
                    <p className='text-[#A7A7A7] text-[16px] font-medium'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                    <ul className='w-[200px flex items-center justify-between flex-wrap mt-[30px]'>
                        <li className='w-[180px] flex flex-col mb-[24px]'>
                            <h3 className='text-[#1A1A1A] text-[14px] fopnt-semibold mb-[7px]'>Subject</h3>
                            <p className='text-[#A7A7A7] text-[14px] font-medium'>English</p>
                        </li>
                        <li className='w-[99px] flex flex-col mb-[24px]'>
                            <h3 className='text-[#1A1A1A] text-[14px] fopnt-semibold mb-[7px]'>Class</h3>
                            <p className='text-[#A7A7A7] text-[14px] font-medium'>J SS 1</p>
                        </li>
                        <li className='w-[99px] flex flex-col mb-[24px]'>
                            <h3 className='text-[#1A1A1A] text-[14px] fopnt-semibold mb-[7px]'>Age</h3>
                            <p className='text-[#A7A7A7] text-[14px] font-medium'>34</p>
                        </li>
                        <li className='w-[99px] flex flex-col mb-[24px]'>
                            <h3 className='text-[#1A1A1A] text-[14px] fopnt-semibold mb-[7px]'>Gender</h3>
                            <p className='text-[#A7A7A7] text-[14px] font-medium'>Male</p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default About