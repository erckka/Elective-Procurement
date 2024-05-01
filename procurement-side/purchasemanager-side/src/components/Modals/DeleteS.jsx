import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import CloseBtn from '../Buttons/CloseBtn'
import axios from 'axios' // Import axios

const DeleteS = ({ isOpen, closeModal }) => {
  const [isProceed, setIsProceed] = useState(false)

  useEffect(() => {
    const deleteSupplier = async () => {
      try {
        if (isProceed) {
          // Call the delete supplier API
          const response = await axios.delete(
            'http://localhost:3001/api/deleteSupplier', // Replace 1001 with the actual supplier ID
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          if (!response.ok) {
            throw new Error('Failed to delete supplier')
          }
          setIsDeleted(true)
          closeModal()
        }
      } catch (error) {
        console.error('Error deleting supplier:', error)
        // Handle error or show a notification to the user
      }
    }

    deleteSupplier()
  }, [isProceed, closeModal])

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 shadow bg-[#00000080]">
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
                className="bg-yellow-600 text-white w-[5rem] font-bold py-[0.2rem] text-sm rounded"
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
      )}
    </>
  )
}

export default DeleteS
