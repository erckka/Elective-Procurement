import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'
import CustomBarChart from '../components/Dashboard/CustomBarChart.jsx'
import DonutChart from '../components/Dashboard/DonutChart.jsx'
import ScatterAnalytics from '../components/Dashboard/ScatterAnalytics.jsx'

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="md:h-screen mb-4 md:mb-0">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 mt-8 flex flex-col gap-x-4 mx-12 lg:mx-24">
        <DonutChart />
        <DonutChart />
        <DonutChart />
        <ScatterAnalytics />
      </div>

      <div className="flex flex-col lg:flex-col"></div>
    </div>
  )
}

export default Dashboard
