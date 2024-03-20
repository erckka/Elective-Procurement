import React, { useState } from 'react'
import PRdata from '../ProductReq/PRdata'

const PRSummary = ({ closeModal, type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = () => {
    setIsOpen(true)
  }

  const nextEntry = () => {
    if (currentIndex < PRdata.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-[14rem] shadow">
      <div className="bg-white flex justify-center shadow-lg flex-col z-50 items-center px-2 w-[90%] md:w-[30%] md:-mt-[7rem] lg:w-[40%] lg:-mt-[14rem] lg:ml-44">
        <h1 className="title flex text-center text-[14px] font-bold py-1 mt-2">
          {type === 'PurchaseRequest'
            ? 'Purchase Request Summary'
            : 'Purchase Order Summary'}
        </h1>

        <div className="border-b-[0.1rem] w-[16rem] border-transparent border-gradient my-[0.3rem] mb-4"></div>

        <div className="flex justify-start  ">
          <div className="font-semibold text-[11px] text-left">
            <h1>Supplier Name</h1>
            <h1 className="font-light mb-4">{PRdata[currentIndex].Supplier}</h1>
            <h1 className="my-2">Buyer Info</h1>
            <div className="grid grid-cols-2 grid-rows-6">
              <h1 className>Street:</h1>
              <h1 className="font-light mb-2">{PRdata[currentIndex].Street}</h1>
              <h1 className>City:</h1>
              <h1 className="font-light mb-2">{PRdata[currentIndex].City}</h1>
              <h1 className>Country:</h1>
              <h1 className="font-light mb-2">
                {PRdata[currentIndex].Country}
              </h1>
              <h1 className>State:</h1>
              <h1 className="font-light mb-2">{PRdata[currentIndex].State}</h1>
              <h1 className>Zip Code:</h1>
              <h1 className="font-light mb-2">
                {PRdata[currentIndex].ZipCode}
              </h1>
            </div>
            <div className="item grid grid-cols-4 gap-x-2">
              <div>
                <h1 className="mb-2">Item Name</h1>
                <h1 className="font-light text-center">
                  {PRdata[currentIndex].Item}
                </h1>
              </div>
              <div>
                <h1 className="mb-2">Item Desc.</h1>
                <h1 className="font-light text-center">
                  {PRdata[currentIndex].ItemDesc}
                </h1>
              </div>
              <div>
                <h1 className="mb-2">Quantity:</h1>
                <h1 className="font-light text-center">
                  {PRdata[currentIndex].Qty}
                </h1>
              </div>
              {type === 'PurchaseOrder' && (
                <div>
                  <h1 className="mb-2">Unit Price:</h1>
                  <input type="number" className="font-light text-center" />
                </div>
              )}
            </div>{' '}
          </div>
        </div>
        <button
          className="bg-red-500 w-[5rem] font-bold rounded-sm text-[12px] py-[0.1rem] mt-8 mb-2"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default PRSummary
