import React, { useContext, useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link } from 'react-router-dom'
import loading from "../../assets/images/loading.png"
import {Context} from "../../context/Context"
import { Toaster, toast } from 'react-hot-toast'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {users, setToken} = useContext(Context)

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    const data = {
      phoneNumberOfEmail:e.target.email.value,
      password:e.target.password.value
    }
    if(users.length > 0){
      const findUser = users.some(item => (item.email == data.phoneNumberOfEmail || item.phone == data.phoneNumberOfEmail) &&  item.password == data.password)
      const userData = users.find(item => (item.email == data.phoneNumberOfEmail || item.phone == data.phoneNumberOfEmail) &&  item.password == data.password)
        if(findUser){
          setTimeout(() => toast.success("Welcome"), 500)
          setTimeout(() => {
            setIsLoading(false)
            setToken(data)
            localStorage.setItem("userinfo", JSON.stringify(userData))
          },1000)
        }
    }
    else{
      setTimeout(() => {
        toast.error("User is not defined")
        setIsLoading(false)
      },1000)
    }
  }

  return (
  <>
    <h1 className='font-bold   text-[36px] text-[#4F4F4F] leading-[45px] mb-[53px] text-center mt-[50px]'>Welcome, Log into you account</h1>
    <div className='w-[512px] mx-auto mt-[60px]'>
      <Toaster position="top-center" reverseOrder={false}/>
        <form onSubmit={handleSubmit}  className='flex flex-col space-y-[14px] w-[248px] mx-auto mb-10' autoComplete='off'>
          <h2 className='w-[238px] text-center font-medium text-[16px] leading-[25px] text-[#667085]'>It is our great pleasure to have you on board! </h2>
          <Input name={"email"} type={"text"} placeholder={"Enter your Login"}/>
          <Input name={"password"} type={"password"} placeholder={"Enter Password"}/>
          <Button isLoading={isLoading} loadingImg={loading} type={"submit"} title={"Log In"}/>
        </form>
        <div className='flex items-center justify-center '>
          <Link className='text-[#2D88D4]  font-bold opacity-60 text-[16px]' to={"/register"}>Sign up</Link>
        </div>
    </div>
  </>
  )
}

export default Login