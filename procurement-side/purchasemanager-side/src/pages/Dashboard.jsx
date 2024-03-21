import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PieChart from '../components/Dashboard/PieChart'
// import CustomBarChart from '../components/Dashboard/CustomBarChart.jsx'
import DonutChart from '../components/Dashboard/DonutChart.jsx'

const Dashboard = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-x-2 ">
      <NavBar />
      <NavBarMobile />
      <PieChart />
      <DonutChart />
      {/* <CustomBarChart /> */}
    </div>
  )
}

export default Dashboard
