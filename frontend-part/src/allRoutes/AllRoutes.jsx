import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function AllRoutes() {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
    </Routes>
   </>
  )
}
