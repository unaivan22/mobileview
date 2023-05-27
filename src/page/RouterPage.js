import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Mobileviewone from './v1/Mobileviewone'
import V1Detail from './v1/utils/V1Detail'
import Channel from './v1/goal/Channel'
import NotFound from '../utils/phone/NotFound'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sport-news' element={<Mobileviewone/>} />
            <Route path='/sport-news/detail' element={<V1Detail/>} />

            <Route path='/sport-news/goal' element={<Channel/>} />

            <Route path='*' element={<NotFound/>} />

        </Routes>
     </Router>
  )
}