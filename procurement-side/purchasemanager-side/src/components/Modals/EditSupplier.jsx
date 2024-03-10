import React, { useState } from 'react'
import axios from 'axios'

const EditModal = ({ isOpen, closeModal, initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('Form data submitted:', formData)
      onSave(formData) // Assuming onSave callback is provided correctly
      closeModal()
    } catch (err) {
      console.error('Error submitting form', err)
    }
  }

  const handleDiscardChanges = () => {
    setFormData(initialData)
    closeModal()
  }

  console.log('Initial data:', initialData) // Check initialData passed to modal
  console.log('FormData:', formData) // Check formData state

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-xl font-bold mb-4">Edit Supplier</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="companyName" className="block font-bold mb-1">
                  Supplier Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contactPerson" className="block font-bold mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contactNumber" className="block font-bold mb-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="companyEmail" className="block font-bold mb-1">
                  Company Email
                </label>
                <input
                  type="text"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block font-bold mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block font-bold mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block font-bold mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block font-bold mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border w-full py-2 px-3 rounded focus:outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDiscardChanges}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditModal
