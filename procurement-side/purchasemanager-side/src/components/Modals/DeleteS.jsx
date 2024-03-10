import React from 'react'
import { FaTimes } from 'react-icons/fa'
import CloseBtn from '../Buttons/CloseBtn'

const DeleteS = ({ isOpen, closeModal }) => {
  const handleDelete = () => {
    console.log('Supplier deleted!')
    closeModal()
  }

  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center z-50 mt-28">
        <div className="bg-white flex justify-center shadow-md flex-col items-center w-48">
          <h1 className="text-red-700 font-bold text-center text-[12px]">
            You are about to delete a
          </h1>
          <h1 className="text-red-700 font-bold text-center text-[12px]">
            Supplier
          </h1>
          <FaTimes className="bg-red-700 text-white rounded-sm w-16 h-16 mt-4 my-4" />
          <h1 className="font-bold text-center text-[9px] my-2">
            Do you want to Proceed?
          </h1>
          <div className="flex flex-row gap-x-2 py-2">
            <button
              className="bg-yellow-500 w-[5rem] font-bold py-[0.2rem] text-sm rounded "
              onClick={handleDelete}
            >
              Proceed
            </button>
            <CloseBtn type="goBack" closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteS
