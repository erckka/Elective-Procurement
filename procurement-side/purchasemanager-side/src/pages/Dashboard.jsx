import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'
import CustomBarChart from '../components/Dashboard/CustomBarChart.jsx'
import DonutChart from '../components/Dashboard/DonutChart.jsx'
import ScatterAnalytics from '../components/Dashboard/ScatterAnalytics.jsx'

const Dashboard = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <NavBar />
      <NavBarMobile />
      <div className="h-screen md:w-full overflow-x-auto flex flex-col  md:flex-row bg-red-500 jus ">
        <div className=" bg-black">
          <div className="flex flex-row gap-x-4  justify-center  mt-24 md:mt-2 ">
            <DonutChart />
          </div>
          <ScatterAnalytics />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
