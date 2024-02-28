import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'

const Dashboard = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <NavBarMobile />
    </div>
  )
}

export default Dashboard
