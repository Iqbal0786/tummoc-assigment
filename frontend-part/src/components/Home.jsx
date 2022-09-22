import React from 'react'
import { useSelector } from 'react-redux'
 import "../styles/style.css"
export default function Home() {
  const {loading,error}= useSelector((store)=>store.loginReducer);
  console.log(loading)
  return (
    <div className='home_main'>
      <h1>Welcome to Home page </h1>
    </div>
  )
}
