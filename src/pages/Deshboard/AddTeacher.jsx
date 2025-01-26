import React, { useState } from 'react'
import { CallIcon } from '../../assets/icons'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Empty from "../../assets/images/empty.jpg"
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'
import Loading from "../../assets/images/loading.png"
import Teacher from "../Deshboard/Teacher"

const AddTeacher = () => {
  const [loading, setLoading] = useState(false)
  const [uploadImg, setUploadImg] = useState(null)
  const [postList, setPostList] = useState([
    {
      id:1,
      ImgUrl:"",
      Name:"",
      Subject:"",
      Class:"",
      EmailAddress:"",
      Gender:"",
      Age:""
    }
  ])
  const navigate = useNavigate()
  function handleBtnSubmit(e){
    e.preventDefault()
    const data = {
      id:postList.length ? postList[postList.length - 1]. id + 1 : 1,
      ImgUrl:uploadImg,
      Name:e.target.name.value,
      Subject:e.target.subject.value,
      Class:e.target.class.value,
      EmailAddress:e.target.email.value,
      Gender:e.target.gender.value,
      Age:e.target.age.value
    }
    console.log(data);
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setPostList([...postList, data])
    },1000)
    console.log(data);
  }
  return (
    
    <>
    <form onSubmit={handleBtnSubmit} className='w-[1130px] mx-auto pt-[20px]'>
        <div className='w-[1130px] flex items-center justify-end mb-[4px]'>
      <CallIcon/>
      <button className='py-[11px] ml-5  font-semibold text-[14px] leading-[18px] text-[#424242]'>Log out</button>
        </div>
        <div className='flex items-center justify-between py-[10px] mb-[24px]'>
        <h2 className='font-medium text-[20px] text-[#4F4F4F] leading-[25px]'>Add teacher</h2>
        <Button  onClick={() => navigate(PATH.teachers)} extraClass={"!w-[120px] !py-[12px]"} title={"Save"}/>
        </div>
        <div className='flex items-center  gap-[80px]'>
          <div className='w-[406px] flex flex-col gap-5'>
            <label>
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>Full Name</span>
                <Input name={"name"} type={"text"} extraClass={"w-[406px]"}  placeholder={"Full Name"}/>
            </label>
            <label>
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>Email address</span>
                <Input name={"email"} type={"email"} extraClass={"w-[406px]"}  placeholder={"Email address"}/>
            </label>
            <label>
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>Subject</span>
              <select name='subject' className='w-[406px] border-[2px] border-[#A7A7A7] py-[13px] pl-[4px] outline-none  text-[#8A8A8A] rounded-[5px]'>
                <option value="0">Subject</option>
                <option value="1">Ona tili</option>
                <option value="2">Algebra</option>
                <option value="3">Fizika</option>
                <option value="4">Rus tili</option>
              </select>
            </label>
            <label className='flex flex-col'>
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>About</span>
              <textarea className='w-[406px] border-[2px] p-2 border-[#A7A7A7] outline-none rounded-[5px] text-[#A7A7A7]'  name="about" id="" cols="30" rows="7"></textarea>
            </label>
          </div>
          <div className='w-[406px] flex flex-col gap-5'>
            <label> 
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>Class</span>
              <select name='class' className='w-[406px] border-[2px] border-[#A7A7A7] py-[13px] pl-[4px] outline-none  text-[#8A8A8A] rounded-[5px]'>
                <option value="0">Class</option>
                <option value="1">N1</option>
                <option value="2">N2</option>
                <option value="3">N3</option>
                <option value="4">N4</option>
              </select>
            </label>
            <label> 
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>Gender</span>
              <select name='gender' className='w-[406px] border-[2px] border-[#A7A7A7] py-[13px] pl-[4px] outline-none  text-[#8A8A8A] rounded-[5px]'>
                <option value="0">Female</option>
                <option value="1">Male</option>
              </select>
            </label>
            <label> 
              <span className='text-[#8A8A8A] text-[14px] font-medium mb-1'>Age</span>
              <select name='age' className='w-[406px] border-[2px] border-[#A7A7A7] py-[13px] pl-[4px] outline-none  text-[#8A8A8A] rounded-[5px]'>
                <option value="0">Age</option>
                <option value="1">14</option>
                <option value="2">15</option>
                <option value="3">16</option>
                <option value="4">17</option>
              </select>
            </label>
            <label> 
              <Input onChange={(e) => setUploadImg(URL.createObjectURL(e.target.files[0]))}   type={"file"} extraClass={"hidden"}/>
              <img  src={uploadImg ? uploadImg : Empty} alt="Empty Img"  width={220} height={40}/>
            </label>
          </div>
        </div>
          <div className='w-[900px] text-center '>
            <button onClick={() => navigate(PATH.teacher)} type='submit' isLoading={loading} loadingImg={Loading} className='bg-[#509CDB] cursor-pointer text-semibold hover:opacity-55 duration-300 text-[14px] px-[14px] w-[120px] rounded-[5px]   text-white py-[12px] '>ADD</button>
          </div>
    </form>
      {/* <div>
          {postList.map(item => <Teacher  key={item.id} item={item} />)}
      </div> */}
    </>
    
  )
}

export default AddTeacher