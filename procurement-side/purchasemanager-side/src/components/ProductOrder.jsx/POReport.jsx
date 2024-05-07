import React, { useState } from 'react'
import { IoDownloadOutline } from 'react-icons/io5'

const POReport = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div className="flex justify-end lg:mx-[9rem] mt-[15rem] text-left py-4">
      <h1 className="py-2">Filter by action:</h1>
      <select
        onChange={handleChange}
        value={selectedOption}
        className=" w-[10rem] bg-white border shadow-md hover:border-gray-500 mx-6 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" className="text-gray-200">
          Filter by Action
        </option>
        <option value="rejected">Paid</option>
        <option value="pending">Received</option>
      </select>
      <button className="bg-brand-blue px-4 py-2 rounded-md flex">
        <IoDownloadOutline className="text-xl mr-2" />
        <h1>CSV</h1>
      </button>
    </div>
  )
}

export default POReport
