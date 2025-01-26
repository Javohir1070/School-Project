import React, { useContext, useState } from 'react'
import { BuildingIcon, CallIcon, EarphoneIcon, HillIcon, ManIcon, StudentsIcon, StudnetIcon } from '../../assets/icons'
import Button from '../../components/Button'
import { Modal } from '../../components/Modal'
import loading from "../../assets/images/loading.png"
import { Context } from '../../context/Context'

const Dashboard = () => {
  const {setToken} = useContext(Context)
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handeLogout(){
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      location.replace("/")
      setToken(null)
    },1000)
  }

  return (
    <div className='mx-auto'>
        <div className='mx-auto mt-[30px] mb-[40px]'>
      <div className='flex items-center justify-between w-[1000px] '>
        <p className='text-[16px] text-[#424242] leading-[20px] w-[536px]'>Learn  how to launch faster watch our webinar for tips from our experts and get a limited time offer.</p>
        <div className='flex items-center gap-[48px]'>
          <CallIcon/>
          <Button onClick={() => setModal(true)} type={"submit"} extraClass={"!w-[120px]"} title={"Log out"}/>
        </div>
      </div>
        </div>
        <div className='w-[755px]'>
          <h1 className='font-semibold text-[36px] text-[#4F4F4F] leading-[45px] mb-[23px]'>Welcome to your dashboard, Udemy school</h1>
          <a className='font-semibold text-[24px] text-[#4F4F4F] leading-[30px]' href="#">Uyo/school/@teachable.com</a>
        </div>
        <ul className='w-[1000px] py-[20px] flex items-end justify-between '>
          <div>
          <li className='w-[600px] flex items-start gap-[20px] pl-[40px] mb-[40px]'>
              <ManIcon/>
              <div className='w-[464px]'>
                <h2 className='font-medium text-[24px] text-[#4F4F4F] leading-[30px] mb-[14px]'>Add other admins </h2>
                <p className='text-[#4F4F4F] text-[14px] '>Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
          </li>
          <li className='w-[600px] flex items-start gap-[20px] pl-[40px] mb-[40px]'>
              <BuildingIcon/>
              <div className='w-[464px]'>
                <h2 className='font-medium text-[24px] text-[#4F4F4F] leading-[30px] mb-[14px]'>Add classes  </h2>
                <p className='text-[#4F4F4F] text-[14px] '>Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
          </li>
          <li className='w-[600px] flex items-start gap-[20px] pl-[40px] mb-[40px]'>
              <StudnetIcon/>
              <div className='w-[464px]'>
                <h2 className='font-medium text-[24px] text-[#4F4F4F] leading-[30px] mb-[14px]'>Add students </h2>
                <p className='text-[#4F4F4F] text-[14px] '>Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!</p>
              </div>
          </li>
          </div>
        <div className='relative'>
          <Button extraClass={"bg-[#152259] rounded-[30px] pr-[20px] !w-[181px] py-[21px]"} title={"Support"} />
          <span className='absolute  top-6 bottom-4 my-auto left-7'><EarphoneIcon/></span>
          <strong className='absolute top-6 bottom-4 my-auto right-7 '><HillIcon/></strong>
        </div>
        <Modal openModal={modal} setOpenModal={setModal}>
          <h2 className='text-[25px] font-bold text-center'>Do you want to go out?</h2>
          <div className='flex items-center justify-between mt-[30px] px-[10px]'>
            <Button onClick={() => setModal(false)} extraClass={"!w-[220px] "} title={"Cansel"}/>
            <Button onClick={handeLogout} loadingImg={loading} isLoading={isLoading} extraClass={"!w-[220px] bg-red-500 "} title={"Log Out"}/>
          </div>
        </Modal>
        </ul>
       
    </div>
    
  )
}

export default Dashboard