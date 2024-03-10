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
    <div className="flex flex-col">
      <NavBar />
      <NavBarMobile />
      <PRheading />
      <div className="mx-4  text-white w-1/2 px-2">
        <select
          id="selectOption"
          value={selectedOption}
          className="bg-dark-blue p-1"
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          <option value="productReq">Product Request</option>
          <option value="prStatus">PR Status</option>
        </select>
      </div>
      {selectedOption === 'productReq' && <ProductReq />}
      {selectedOption === 'prStatus' && <PRStatus />}
    </div>
  )
}

export default PurchaseReq
