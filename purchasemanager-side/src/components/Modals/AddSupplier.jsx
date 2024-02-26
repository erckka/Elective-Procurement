import React, { useState } from 'react'
import { RiFileAddFill } from 'react-icons/ri'

const AddModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    contactNumber: '',
    companyEmail: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., send data to server)
    console.log('Changes saved:', formData)
    closeModal()
  }

  const handleDiscardChanges = () => {
    // Logic to discard changes
    setFormData({
      companyName: '',
      contactPerson: '',
      contactNumber: '',
      companyEmail: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    })
    closeModal()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSaveChanges()
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-brand-purple md:ml-[20rem] lg:ml-[20rem]  mt-4 w-[9rem] mx-8 h-auto p-2 flex items-center justify-center rounded-md shadow-md text-white cursor-pointer"
      >
        <span className="text-base mr-2">
          <RiFileAddFill />
        </span>
        Add Supplier
      </button>
      {isOpen && (
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
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label
                    htmlFor="companyName"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem] lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="contactPerson"
                    className="block text-gray-700 text-sm font-bold mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Contact Person
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem] px-3 lg:py-[0.3rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="contactNumber"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem] lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="companyEmail"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Company Email
                  </label>
                  <input
                    type="text"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem] lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem]  lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem]  lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="state"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem]  lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="zipCode"
                    className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem] lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-gray-700 text-sm font-bold mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-[0.1rem] lg:py-[0.3rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex flex-row">
                  <button
                    type="submit"
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
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddModal
