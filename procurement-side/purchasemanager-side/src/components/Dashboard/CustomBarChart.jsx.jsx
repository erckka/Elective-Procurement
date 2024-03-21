import React from 'react'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import data from '../Dashboard/data'

const CustomBarChart = () => {
  return (
    <div className="h-[22rem] mt-2 p-5 rounded-md border border-slate-300 flex flex-col shadow-md bg-white">
      <div className="mt-3 w-full flex-1">
        <ResponsiveContainer width={300} height={250}>
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CustomBarChart
