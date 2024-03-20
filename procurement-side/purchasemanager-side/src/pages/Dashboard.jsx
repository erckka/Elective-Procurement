import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'

const Dashboard = () => {
  return (
    <div className="flex flex-col  md:flex-row">
      <NavBar />
      <NavBarMobile />
      <PieChart />
    </div>
  )
}

export default Dashboard
