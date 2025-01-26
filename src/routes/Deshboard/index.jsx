import React from 'react'
import {deshboardList} from "../../hooks/useRoute"
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../modules/Navbar'

const DeshboardRoutes = () => {
  return (
    <div className='flex'>
        <Navbar/>
        <Routes> {deshboardList.map(item => <Route key={item.id} path={item.path} element={item.element} />)} </Routes>

    </div>
  )
}
export default DeshboardRoutes