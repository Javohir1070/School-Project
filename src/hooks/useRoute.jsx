import React from "react"
import {Dashboard, Billing, Exams, Features, SettingsAndProfile, Students, Teachers,  AddTeacher, Teacher, About} from "../pages/Deshboard"
import {PATH} from "../hooks/usePath"
import { BillingIcon, DeshboardIcon, ExamsIcon, FeaturesIcon, SettingsAndProfileIcon, StudentsIcon, TeachersIcon } from '../assets/icons'
import { Login, Register } from "../pages/Login"



export const deshboardList = [
    {
        id:1,
        path: PATH.dashboard,
        element: <Dashboard/>,
        children:[]
    },
    {
        id:2,
        path: PATH.teachers,
        element: <Teachers/>,
        children:[]
    },
    {
        id:3,
        path: PATH.students,
        element: <Students/>,
        children:[]
    },
    {
        id:4,
        path: PATH.billing,
        element: <Billing/>,
        children:[]
    },
    {
        id:5,
        path: PATH.Settingsandprofile,
        element: <SettingsAndProfile/>,
        children:[]
    },
    {
        id:6,
        path: PATH.exams,
        element: <Exams/>,
        children:[]
    },
    {
        id:7,
        path: PATH.features,
        element: <Features/>,
        children:[]
    },
    {
        id:8,
        path: PATH.addTeacher,
        element: <AddTeacher/>,
        children:[]
    },
    {
        id:9,
        path: PATH.teacher,
        element: <Teacher/>,
        children:[]
    },
    {
        id:10,
        path: PATH.about,
        element: <About/>,
        children:[]
    }


]


export const loginRoutes =  [
    {
      id:1,
      path: PATH.dashboard,
      element:<Login/>,
      children:[]
    },
    {
      id:2,
      path: PATH.register,
      element:<Register/>,
      children:[]
    },
]

export const navbarList = [
    {
        id:1,
        title:"Dashboard",
        path: PATH.dashboard,
        icon:<DeshboardIcon/>
    },
    {
        id:2,
        title:"Teachers",
        path: PATH.teachers,
        icon:<TeachersIcon/>
    },
    {
        id:3,
        title:"Students",
        path: PATH.students,
        icon:<StudentsIcon/>
    },
    {
        id:4,
        title:"Billing",
        path: PATH.billing,
        icon:<BillingIcon/>
    },
    {
        id:5,
        title:"Settings and profile",
        path: PATH.Settingsandprofile,
        icon:<SettingsAndProfileIcon/>
    },
    {
        id:6,
        title:"Exams",
        path: PATH.exams,
        icon:<ExamsIcon/>
    },
    {
        id:7,
        title:"Features",
        path: PATH.features,
        icon:<FeaturesIcon/>
    },

]