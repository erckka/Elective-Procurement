import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'
import CustomBarChart from '../components/Dashboard/CustomBarChart.jsx'
import DonutChart from '../components/Dashboard/DonutChart.jsx'
import ScatterAnalytics from '../components/Dashboard/ScatterAnalytics.jsx'
import DateComponent from '../components/Dashboard/DateComponent.jsx'
import DashboardLayout from '../components/Dashboard/DashboardLayout.jsx'
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="md:h-screen mb-4 md:mb-0">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="h-screen md:w-full flex  overflow-x-auto">
        <div className="flex flex-col w-full">
          <DateComponent />
          <div className="flex flex-row gap-5 justify-center items-center">
            <DashboardLayout />
            {/* <DonutChart />
            <DonutChart />
            <DonutChart /> */}
          </div>
          <div className="flex flex-row gap-5 ml-24 mt-5 items-center">
            {/* <ScatterAnalytics /> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-col"></div>
    </div>
  )
}

export default Dashboard
