import React, { useState } from 'react'
import { RiFileAddFill } from 'react-icons/ri'

const EditModal = ({ initialData, onSave, onClose }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSaveChanges = () => {
    onSave(formData)
    closeModal()
  }

  const handleDiscardChanges = () => {
    closeModal()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSaveChanges()
  }

  const closeModal = () => {
    onClose()
  }

  return (
    <div className="relative">
      <div className="bg-brand-purple md:ml-[20rem] lg:ml-[20rem]  mt-4 w-[9rem] mx-8 h-auto p-2 flex items-center justify-center rounded-md shadow-md text-white cursor-pointer">
        <span className="text-base mr-2">
          <RiFileAddFill />
        </span>
        Edit Supplier
      </div>
      <div className=" flex justify-center overflow-y-auto inset-2  items-center md:mt-[2rem] mt-[1rem]  ">
        <div className="absolute  inset-0" onClick={closeModal}></div>
        <div className="relative flex justify-center shadow-lg md:mx-[15rem]  rounded-lg w-[18rem] md:w-[20rem]  xl:w-1/4 z-50">
          <div className="p-6">
            <div className="text-center">
              <h1 className="text-xl font-bold mb-4 border-b-2 border-dark-blue">
                Supplier{' '}
              </h1>
            </div>
            <h2 className="text-md font-bold mb-4">Supplier Info</h2>
            <form onSubmit={handleSubmit}></form>
            <div className="flex flex-row">
              <button
                type="submit"
                onClick={handleSaveChanges}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[0.2rem] px-2 text-sm rounded focus:outline-none focus:shadow-outline mr-2 whitespace-nowrap"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleDiscardChanges}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal
