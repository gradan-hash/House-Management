import React from 'react'
import Landing from './routes/Landing'
import Login from './routes/login.js'
import Register from './routes/register'
import Layout from './routes/layout'
import Properties from './properties/properties'
import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";



export default function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>

          <Route path = '/' element = {<Layout/>}/>
          <Route index element = {<Landing/>} />
          <Route path = 'Login' element = {<Login/> }/>
          <Route path ='Register' element = {<Register/>}/>
          <Route path ='Properties' element = {<Properties/>}/>

          {/* <Route path ='about' element = {<About/>}
          <Route path = 'login' element = {<Contact/>} */}

        </Routes>
      
      </BrowserRouter>
    </>
  );
}


