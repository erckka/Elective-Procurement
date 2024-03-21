import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'
import CustomBarChart from '../components/Dashboard/CustomBarChart.jsx'
import DonutChart from '../components/Dashboard/DonutChart.jsx'

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:h-screen mb-4 md:mb-0">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="flex md:flex-row border border-red-500">
        {/* <PieChart /> */}
        <DonutChart />
        <DonutChart />
        <DonutChart />
      </div>
    </div>
  )
}

export default Dashboard
