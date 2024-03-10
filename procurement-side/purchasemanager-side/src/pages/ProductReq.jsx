import React, { useState } from 'react'
import PRheading from '../components/Header/prheading'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import ProductReq from '../components/ProductReq/ProductReq'
import PRStatus from '../components/ProductReq/PRStatus'

const PurchaseReq = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <div className="relative min-h-screen">
      <NavBar />
      <NavBarMobile />
      <PRheading />

      <div className="absolute mt-4 mr-2 md:mr-2  right-0 flex items-center">
        <div className=" w-1/2 px-2">
          <select
            id="selectOption"
            value={selectedOption}
            className="bg-slate-100 p-1 focus:outline-slate-100 shadow-md"
            onChange={(e) => handleOptionChange(e.target.value)}
          >
            <option value="">Choose an Action</option>

            <option value="productReq">Product Request</option>
            <option value="prStatus">PR Status</option>
          </select>
        </div>
      </div>

      {selectedOption === 'productReq' && <ProductReq />}
      {selectedOption === 'prStatus' && <PRStatus />}
    </div>
  )
}

export default PurchaseReq
