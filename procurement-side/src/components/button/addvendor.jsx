import React from 'react'
import { RiFileAddFill } from 'react-icons/ri'

const AddVendor = () => {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div
      className="bg-brand-purple md:ml-[7rem] mt-4 w-[9rem] mx-8 h-auto p-2 flex items-center justify-center rounded-md shadow-md text-white cursor-pointer"
      onClick={handleClick}
    >
      <span className="text-base mr-2">
        <RiFileAddFill />
      </span>
      Add Supplier
    </div>
  )
}

export default AddVendor
