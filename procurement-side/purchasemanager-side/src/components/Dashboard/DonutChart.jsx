import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'

const DonutChart = () => {
  const data = [
    { name: 'Apples', value: 400 },
    { name: 'Oranges', value: 300 },
    { name: 'Bananas', value: 200 },
    { name: 'Berries', value: 500 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="h-[20rem] mt-8 md:mt-24 p-5 rounded-md border border-slate-300 flex flex-col shadow-md bg-white">
      <div className="title self-center">Top Seller</div>
      <ResponsiveContainer width={450} height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="60%"
            cy="50%"
            innerRadius={30}
            outerRadius={60}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(2)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DonutChart
