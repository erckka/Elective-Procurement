import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import DeleteS from '../Modals/DeleteS'

const EditModal = ({ isOpen, closeModal, initialData, onSave, onDelete }) => {
  const [formData, setFormData] = useState(initialData || {})
  const [showDeleteModal, setShowDeleteModal] = useState(false) // State to control DeleteS modal

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
        <div className="flex justify-center overflow-y-auto inset-2 fixed p-2 items-center md:mt-[-4rem] mt-[4rem] z-50">
          <div className="inset-0 rounded-lg mt-[8rem] bg-white shadow-md w-[20rem] md:w-[20rem] lg:w-[25rem] lg:p-2 lg:px-6 p-2 px-4">
            <h1 className="text-xl text-center font-bold mb-4">
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

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
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
