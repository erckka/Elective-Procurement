import React from 'react'
import CloseBtn from '../Buttons/CloseBtn'

const SupplierSumm = ({ closeModal, rowData }) => {
  const {
    contactPerson,
    contactNumber,
    companyEmail,
    address,
    city,
    state,
    country,
    zipCode,
  } = rowData
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50   shadow bg-[#00000080]    p-4
    "
    >
      <div className="bg-white flex shadow-lg flex-col items-start w-[370px] lg:-mt-[5rem] lg:ml-44 rounded-md ">
        <h1 className="self-center text-[14px] font-bold py-1 mt-2">
          Supplier Info Summary
        </h1>
        <div className="border-b-[0.1rem] w-[14rem] self-center border-transparent border-gradient my-[0.3rem] mb-4"></div>
        <div className="flex flex-col font-semibold  text-left ml-8 px-4">
          <h1 className="fonr-semibold">Contact Person:</h1>
          <h1 className="font-light mb-4">{contactPerson}</h1>
          <h1>Contact Number:</h1>
          <h1 className="font-light mb-4">{contactNumber}</h1>
          <h1>Email Address:</h1>
          <h1 className="font-light mb-2">{companyEmail}</h1>
          <h1> Street Address:</h1>
          <h1 className="font-light mb-2">{address}</h1>
          <div className="flex flex-col">
            <div className="flex gap-x-4">
              <h1> City:</h1>
              <h1 className="font-light mb-2">{city}</h1>
            </div>
            <div className="flex gap-x-2">
              <h1> State:</h1>
              <h1 className="font-light mb-2">{state}</h1>
            </div>
            <div className="flex gap-x-2">
              <h1> Country:</h1>
              <h1 className="font-light mb-2">{country}</h1>
            </div>
            <div className="flex gap-x-2 mb-6">
              <h1> Zip Code:</h1>
              <h1 className="font-light mb-2">{zipCode}</h1>
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
