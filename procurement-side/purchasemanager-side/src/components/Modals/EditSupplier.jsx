import React, { useState } from 'react'
import InputField from '../InputField/InputField'

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

  const handleDelete = () => {
    onDelete(formData.id)
    closeModal()
  }

  console.log('Initial data:', initialData) // Check initialData passed to modal
  console.log('FormData:', formData) // Check formData state

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
                value={formData.companyName}
                onChange={handleChange}
              />

              <InputField
                type="ContactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
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
                  onClick={handleDelete} // Call handleDelete instead of handleDiscardChanges
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Delete
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
