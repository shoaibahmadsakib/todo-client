import React from 'react'

import NavBar from './components/NavBar'

import AllUser from './components/AllUser'
import AddUser from './components/AddUser'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import EditUser from './components/EditUser'

const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="all" element={<AllUser /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
 
  )
}

export default App