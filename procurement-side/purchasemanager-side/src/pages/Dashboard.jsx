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

      <div className="h-screen md:w-full flex  overflow-x-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-5 justify-center items-center">
            <DonutChart />
            <DonutChart />
            <DonutChart />
          </div>
          <div className="w-full flex justify-center items-center mt-5">
            <ScatterAnalytics />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-col"></div>
    </div>
  )
}

export default Dashboard
