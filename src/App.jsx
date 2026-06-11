import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./components/Home";
import Shope from './components/Shope'
import Pages from './components/Pages'
import Blog from './components/Blog'
import Connacts from './components/Connacts'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shope />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Connacts' element={<Connacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

