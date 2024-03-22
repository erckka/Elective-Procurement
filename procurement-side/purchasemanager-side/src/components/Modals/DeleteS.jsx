import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import CloseBtn from '../Buttons/CloseBtn'

const DeleteS = ({ isOpen, closeModal }) => {
  const [isProceed, setIsProceed] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleDelete = () => {
    console.log('Supplier deleted!')
    closeModal()
  }

  useEffect(() => {
    if (isProceed) {
      console.log('Supplier successfully edited!')

      const timer = setTimeout(() => {
        console.log('Timer expired! Additional action after approval.')

        closeModal()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isProceed, closeModal])

  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center z-50 mt-28">
        <div className="bg-white flex justify-center shadow-md flex-col items-center w-[15rem] p-4">
          <h1 className="text-red-700 font-bold text-center text-[12px]">
            You are about to delete a
          </h1>
          <h1 className="text-red-700 font-bold text-center text-[12px]">
            Supplier
          </h1>
          <FaTimes className="bg-red-700 text-white rounded-sm w-16 h-16 mt-4 my-4" />
          <h1 className="font-bold text-center text-[9px] my-2 text-red-600">
            *This will remove the data of supplier
          </h1>
          <div className="flex flex-row gap-x-2 py-2">
            <button
              className="bg-yellow-600 text-white w-[5rem] font-bold py-[0.2rem] text-sm rounded "
              onClick={() => {
                setIsProceed(true)
              }}
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
