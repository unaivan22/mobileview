import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Mobileviewone from './v1/Mobileviewone'
import V1Detail from './v1/utils/V1Detail'
import Channel from './v1/goal/Channel'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/v1' element={<Mobileviewone/>} />
            <Route path='/v1/detail' element={<V1Detail/>} />

            <Route path='/v1/goal' element={<Channel/>} />

        </Routes>
     </Router>
  )
}