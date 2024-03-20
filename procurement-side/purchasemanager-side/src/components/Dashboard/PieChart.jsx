import React from 'react'
import {
  PieChart as RechartsPieChart,
  Pie,
  ResponsiveContainer,
} from 'recharts'

const PieChart = () => {
  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ]
  const data02 = [
    {
      name: 'Group A',
      value: 2400,
    },
    {
      name: 'Group B',
      value: 4567,
    },
    {
      name: 'Group C',
      value: 1398,
    },
    {
      name: 'Group D',
      value: 9800,
    },
    {
      name: 'Group E',
      value: 3908,
    },
    {
      name: 'Group F',
      value: 4800,
    },
  ]

  return (
    <div className="h-[20rem] mt-8 md:mt-24 p-5 rounded-md border border-slate-300 flex flex-col shadow-md bg-white">
      <div className="mt-3 w-full flex-1">
        <ResponsiveContainer width={300} height={250}>
          <RechartsPieChart>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8844d9"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChart
