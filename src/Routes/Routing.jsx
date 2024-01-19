import React from 'react'
import Home from '../Pages/Home.jsx'
import {  Route, Routes } from 'react-router-dom'
import Category from '../Components/Category.jsx'
import Searched from '../Components/Searched.jsx'
function Routing() {
  return (
             
                  <Routes>
                       <Route path="/" element={<Home />}/>
                       <Route path = "/Home" element={<Home />} />
                       <Route path = "/category" element={<Category/>} />
                       <Route path = "/searched/:search"  element ={<Searched/>} />
                  </Routes>

  )
}

export default Routing