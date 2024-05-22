import React from 'react'
// import Navbar from './components/Navbar'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Search from './components/Search'
import Details from './components/Details'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/details" element={<Details />}></Route>
    </Routes>
  )
}

export default App