import React, { useState, useEffect } from 'react'
import InputField from '../InputField/InputField'
import DeleteS from '../Modals/DeleteS'

const EditModal = ({ isOpen, closeModal, initialData, onSave, onDelete }) => {
  const [formData, setFormData] = useState(initialData || {})
  const [showDeleteModal, setShowDeleteModal] = useState(false) // State to control DeleteS modal

  // useEffect(() => {
  //   if (handleSubmit) {
  //     console.log('Supplier Successfully edited!')

  //     const timer = setTimeout(() => {
  //       console.log('Timer expired! Additional action after approval.')

  //       closeModal()
  //     }, 3000)

  //     return () => clearTimeout(timer)
  //   }
  // }, [onSave, closeModal])
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    closeModal()
  }
  const handleDelete = () => {
    setShowDeleteModal(true) // Show the DeleteS modal
  }
  const handleConfirmDelete = () => {
    onDelete(formData.id)
    setShowDeleteModal(false) // Close the DeleteS modal
    closeModal() // Close the EditModal
  }

  return (
    <div>
      {isOpen && (
        <div className="flex justify-center overflow-y-auto inset-2 fixed p-2 items-center md:mt-[-4rem] mt-[4rem] z-50 shadow bg-[#00000080]">
          <div className="inset-0 rounded-lg mt-[8rem] bg-white shadow-md w-[20rem] md:w-[20rem] lg:w-[25rem] lg:p-2 lg:px-6 p-2 px-4">
            <h1 className="text-xl text-center font-bold mb-4 mt-4">
              Edit Supplier
            </h1>
            <div className="border-b-2 border-transparent border-gradient my-[0.3rem] mb-4"></div>

            <form onSubmit={handleSubmit}>
              <InputField
                type="SupplierName"
                value={formData?.companyName || ''}
                onChange={handleChange}
              />

              <InputField
                type="ContactPerson"
                value={formData?.contactPerson || ''}
                onChange={handleChange}
              />
              <InputField
                type="ContactNumber"
                value={formData?.contactNumber || ''}
                onChange={handleChange}
              />

              <InputField
                type="CompanyEmail"
                value={formData?.companyEmail || ''}
                onChange={handleChange}
              />
              <InputField
                type="Address"
                value={formData?.address || ''}
                onChange={handleChange}
              />
              <div className="grid grid-cols-2 w-[100%]  gap-x-4">
                <InputField
                  type="City"
                  value={formData?.city || ''}
                  onChange={handleChange}
                />
                <InputField
                  type="State"
                  value={formData?.state || ''}
                  onChange={handleChange}
                />

                <InputField
                  type="ZipCode"
                  value={formData?.zipCode || ''}
                  onChange={handleChange}
                />

                <InputField
                  type="Country"
                  value={formData?.country || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row gap-x-2  mt-4 ">
                <button
                  type="submit"
                  className="bg-blue-500 w-[50%] text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                  // onClick={handleSubmit}
                >
                  Approve
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 w-[50%]"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <DeleteS
          isOpen={true}
          closeModal={() => setShowDeleteModal(false)}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  )
}

export default EditModal
