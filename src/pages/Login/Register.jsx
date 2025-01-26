import React, { useContext, useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useNavigate } from 'react-router-dom'
import loading from "../../assets/images/loading.png"
import {Context} from "../../context/Context"
import { Toaster, toast } from 'react-hot-toast'

const Register = () => {
  const {setUsers, users} = useContext(Context)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [useEmail, setUseEmail] = useState(false)
  function handleRegisterSubmit(e){
    setIsLoading(true)
    e.preventDefault()
    const data = {
      name:e.target.name.value,
      phone:e.target.phone.value,
      password:e.target.password.value,
      email: useEmail ? e.target.email.value : null
    }
    setUsers([...users, data])
    setTimeout(() => toast.success("User accepted"),500)
    setTimeout(() => {
      e.target.reset()
      setIsLoading(false)
      navigate(-1)
    }, 1000)
  }


  return (
    <>
    <h1 className='font-semibold text-[36px] leading-[45px] text-[#4F4F4F] text-center mb-[53px] mt-[50px]'>Welcome, Sign up</h1>
        <div className='w-[512px] mx-auto text-center  pt-[72px]'>
          <h2 className='font-medium text-[16px] leading-[25px] w-[248px] mx-auto text-[#667085] mb-[34px]'>It is our great pleasure to have you on board! </h2>
         <Toaster position="top-center" reverseOrder={false}/>
          <form onSubmit={handleRegisterSubmit} className='flex flex-col space-y-[14px] w-[248px] mx-auto   mb-10' autoComplete='off'>
              <Input   name={"name"} type={"text"} placeholder={"Enter your name"}/>
              <Input name={"phone"} type={"tel"} placeholder={"Enter your Phone number"}/>
              <Input name={"password"} type={"password"} placeholder={"Enter your Password"}/>
              {useEmail &&  <Input name={"email"} type={"email"} placeholder={"Enter your email"}/>}
              <div className='flex items-center justify-between my-[30px]'>
                  <p onClick={() => setUseEmail(!useEmail)} className='text-[#1DA1F2] text-[18px]'>{useEmail ? "Hide Email" : "use Email"}</p>
                  <Link className='text-[#1DA1F2] text-[18px]' to={"/"}>Log In</Link>
              </div>
              <Button isLoading={isLoading} loadingImg={loading} type={"submit"} title={"Sign up"}/>
          </form>
        </div>
    </>
  )
}

export default Register