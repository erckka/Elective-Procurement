import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import { FaClipboard } from 'react-icons/fa'
import { SupplierInfo } from './SupplierInfo'

const Row_supplier = () => {
  return (
    <div className="flex flex-col  md:ml-20 ">
      <div className="flex flex-row ml-0 mt-4 gap-x-8">
        <h1 className="text-[12px]  md:px-8 font-bold ">Supplier Name</h1>
        <h1 className="text-[12px]  md:px-8 font-bold">Contact Number</h1>
        <h1 className="text-[12px] px-2 lg:ml-2 md:px-8 font-bold hidden md:block">
          Email Address
        </h1>
        <h1 className="text-[12px] px-2 md:px-8 font-bold hidden lg:block">
          Contact Person
        </h1>
      </div>
      <div className="mx-4 ">
        {SupplierInfo.map((item, index) => (
          <div
            key={index}
            className="shadow-md w-full md:w-full mt-4 h-8 border-b border-black flex items-center  justify-between my-2"
          >
            <div className="grid grid-cols-3 lg:grid-cols-4 justify-start ml-2 gap-x-10 whitespace-nowrap">
              <span className="text-black mr-4 ml-2">{item.Supplier_Name}</span>
              <span className="text-black -ml-2">{item.Contact_Number}</span>
              <span className="text-black mr-4  hidden md:block">
                {item.Company_Email}
              </span>
              <span className="text-black mr-4 hidden md:hidden lg:block">
                {item.Contact_Person}
              </span>
            </div>

            <div className="flex  lg:-ml-10 ">
              <CiEdit className="bg-brand-blue text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6   " />
              <PiDotsThreeDuotone className="bg-slate-600 text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6" />
              <FaClipboard className="bg-brand-purple text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row_supplier
