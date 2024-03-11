import React from 'react'
import SupplierInfo from '../SupplierData/SupplierInfo'
import CloseBtn from '../Buttons/CloseBtn'

const SupplierSumm = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow">
      <div className="bg-white flex shadow-lg flex-col items-start w-[70%] md:w-[30%] md:-mt-[7rem] lg:w-[20%] lg:-mt-[14rem] lg:ml-44">
        <h1 className="self-center text-[14px] font-bold py-1 mt-2">
          Supplier Info Summary
        </h1>
        <div className="border-b-[0.1rem] w-[14rem] self-center border-transparent border-gradient my-[0.3rem] mb-4"></div>
        <div className="flex flex-col font-semibold text-[11px] text-left ml-2 px-4">
          <h1>Contact Person:</h1>
          <h1 className="font-light mb-4">data</h1>
          <h1>Contact Number:</h1>
          <h1 className="font-light mb-4">data</h1>
          <h1>Email Address:</h1>
          <h1 className="font-light mb-2">data</h1>
          <h1> Street Address:</h1>
          <h1 className="font-light mb-2">data</h1>
          <div className="flex flex-col">
            <div className="flex gap-x-4">
              <h1> City:</h1>
              <h1 className="font-light mb-2">data</h1>
            </div>
            <div className="flex gap-x-2">
              <h1> State:</h1>
              <h1 className="font-light mb-2">data</h1>
            </div>
            <div className="flex gap-x-2">
              <h1> Country:</h1>
              <h1 className="font-light mb-2">data</h1>
            </div>
            <div className="flex gap-x-2">
              <h1> Zip Code:</h1>
              <h1 className="font-light mb-2">data</h1>
            </div>
          </div>
        </div>

        <div className="self-center flex justify-center mx-auto w-full mb-2">
          <CloseBtn type="close" closeModal={closeModal} />
        </div>
      </div>
    </div>
  )
}

export default SupplierSumm
