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
    <div className="flex flex-col h-screen md:flex-row">
      <div className="md:h-screen mb-4 md:mb-0">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="h-screen md:w-full flex flex-col overflow-x-auto">
        <PRheading />
        <div className="absolute  mt-24  md:mt-24 lg:mt-24 mr-2 md:mr-2  right-0 flex items-center ">
          <div className=" w-1/2 px-2 ">
            <select
              id="selectOption"
              value={selectedOption}
              className="bg-purple-200 p-1 focus:outline-slate-100 shadow-md"
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
    </div>
  )
}

export default PurchaseReq
