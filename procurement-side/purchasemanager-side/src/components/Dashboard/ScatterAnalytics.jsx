import React from 'react'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import ScatterData from './ScatterData'

const ScatterAnalytics = () => {
  return (
    <div className="mt-8 md:mt-4 p-5 rounded-md border border-slate-300 flex flex-col shadow-md bg-red-500">
      <ScatterChart
        width={700}
        height={250}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" name="stature" unit="cm" />
        <YAxis dataKey="y" type="number" name="weight" unit="kg" />
        <ZAxis
          dataKey="z"
          type="number"
          range={[64, 144]}
          name="score"
          unit="km"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="A school" data={ScatterData[0]} fill="#8884d8" />
        <Scatter name="B school" data={ScatterData[1]} fill="#82ca9d" />
      </ScatterChart>
    </div>
  )
}

export default ScatterAnalytics
