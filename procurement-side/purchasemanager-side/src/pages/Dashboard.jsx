import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'
import CustomBarChart from '../components/Dashboard/CustomBarChart.jsx'
import DonutChart from '../components/Dashboard/DonutChart.jsx'

const Dashboard = () => {
  return (
    <div className="flex flex-col  md:flex-row   ">
      <NavBar />
      <NavBarMobile />
      <div className="flex flex-col md:mx-[4rem] ">
        <div className="flex flex-row gap-x-2  mt-24 md:mt-4 ">
          <DonutChart />
          <DonutChart />
          <DonutChart />
        </div>
        {/* <div className="div mt-4 md:ml-4 ">
          <CustomBarChart />
        </div> */}
      </div>
    </div>
  )
}

export default Dashboard
