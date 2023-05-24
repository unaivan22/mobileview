import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mobileviewone from './v1/Mobileviewone'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Mobileviewone/>} />

        </Routes>
     </Router>
  )
}