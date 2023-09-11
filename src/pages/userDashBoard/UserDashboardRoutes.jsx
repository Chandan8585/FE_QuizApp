import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from './gallery/Gallery'
import QuizCard from '../../components/quizCard/QuizCard'

const UserDashboardRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Gallery/>} />
        <Route path='/quiz' element={<QuizCard/>} />
        
    </Routes>
  )
}

export default UserDashboardRoutes