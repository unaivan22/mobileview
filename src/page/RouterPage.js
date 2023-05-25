import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mobileviewone from './v1/Mobileviewone'
import V1Detail from './v1/utils/V1Detail'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/v1' element={<Mobileviewone/>} />
            <Route path='/v1/detail' element={<V1Detail/>} />

        </Routes>
     </Router>
  )
}