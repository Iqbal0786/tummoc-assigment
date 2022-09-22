import React from 'react'
import { useSelector } from 'react-redux'
 import "../styles/style.css"
export default function Home() {
  const { isLogged}= useSelector((store)=>store.loginReducer);
  console.log(isLogged)
  return (
    <div className='home_main'>
      <h1>Welcome to Home page </h1>
    </div>
  )
}
