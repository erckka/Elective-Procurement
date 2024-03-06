import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'

const ApprovePR = ({ closeModal, row }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [isRejected, setIsRejected] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (isApproved) {
      console.log('Product requisition approved!')

      const timer = setTimeout(() => {
        console.log('Timer expired! Additional action after approval.')

        closeModal()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isApproved, closeModal])

  const handleApproveClick = () => {
    setIsApproved(true)
  }

  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center z-50 mt-28">
        <div className="bg-white flex justify-center shadow-md flex-col items-center w-48">
          <h1 className="text-green-700 font-bold text-center text-[12px]">
            You are about to approve a
          </h1>
          <h1 className="text-green-700 font-bold text-center text-[12px]">
            Product Requisition
          </h1>

          <FaCheck className="bg-green-700 text-white rounded-sm w-16 h-16 mt-4 my-4 p-2" />
          <h1 className="font-bold text-center text-[9px] my-2">
            Do you want to Proceed?
          </h1>
          <div className="flex flex-row gap-x-2 py-2">
            <button
              className="bg-green-500 w-[5rem] font-bold py-[0.2rem] text-[12px]"
              onClick={handleApproveClick}
            >
              Approve
            </button>
            <button
              className="bg-red-500 w-[5rem] font-bold rounded-sm text-[12px]"
              onClick={closeModal}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprovePR