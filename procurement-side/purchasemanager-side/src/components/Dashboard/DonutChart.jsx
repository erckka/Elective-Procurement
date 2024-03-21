import React from 'react'
import DonutData from './DonutData'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'

const DonutChart = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="h-[18rem] mt-8 md:mt-24 p-5 rounded-md border border-slate-300 flex flex-col shadow-md bg-white">
      <div className="title self-center">Top Seller</div>
      <ResponsiveContainer width={300} height={250}>
        <PieChart>
          <Pie
            data={DonutData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={50}
            paddingAngle={2}
            dataKey="value"
            labelLine={true} // Enable label lines
            label={({ percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
          >
            {DonutData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" align="auto" verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DonutChart
