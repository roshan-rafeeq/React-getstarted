import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
 
let newArr = [0,1,3,5,4,8]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'> Vite with Tailwind </h1>
      <Cards userName="Alexa" post="Staff Engg." imgurl='https://images.pexels.com/photos/9853293/pexels-photo-9853293.jpeg?auto=compress&cs=tinysrgb&w=600'  myArr={newArr} />
      <Cards userName='roshan'post='Web Developer' imgurl="https://images.pexels.com/photos/7005631/pexels-photo-7005631.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Cards imgurl="https://images.pexels.com/photos/8041066/pexels-photo-8041066.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </>
  )
}

export default App
