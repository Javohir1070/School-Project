import React, { useContext } from 'react'
import {Context} from "./context/Context"
import DeshboardRoutes from './routes/Deshboard'
import LoginRoutes from './routes/Login'
import './App.css'

function App() {
  
  const {token} = useContext(Context)
  if(token){
    return <DeshboardRoutes/>
  }
  else{
    return <LoginRoutes/>
  }
 
}
export default App
