import React from 'react'
import "./userDashBoard.css"
import Navbar from '../../components/Navbar'
import { Link, Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom

const UserDashBoard = () => {
  return (
    <div className="dashboard-container">
      <div>
        <Navbar />
        {/* Use Outlet to render nested routes */}
        <Outlet />
      </div>
      <aside className='sidebar'>
        <Link to={"/user-dashboard"}>
        <button  className='icon-button'>
        <span className="material-icons-outlined">
          video_library
         </span>
          <span>Lectures</span>
        </button>
       
        </Link>
        <Link to={"/quiz"}>
            <button className='icon-button'>
            <span className="material-icons-outlined">
        quiz
        </span>
          <span>Assesment</span>
            </button>
        
        </Link>
      
        <Link to={"/user-dashboard/quiz"}>
          <button  className='icon-button'>
          <span className="material-icons-outlined">
         notes
       </span>
        <span>Notes</span>
        </button>
        </Link>
      </aside>
    </div>
  )
}

export default UserDashBoard
