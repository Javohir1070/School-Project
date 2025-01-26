import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {loginRoutes} from "../../hooks/useRoute"
const LoginRoutes = () => {

  return (
    <Routes>{loginRoutes.map(item => <Route path={item.path} element={item.element} key={item.id} />)} </Routes>
  )
}

export default LoginRoutes