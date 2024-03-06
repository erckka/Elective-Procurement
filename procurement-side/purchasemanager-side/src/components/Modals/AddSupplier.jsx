import { RiFileAddFill } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/suppliers', formData)
      console.log('Supplier added successfully')
      // Logic to update UI with the newly added supplier
    } catch (err) {
      console.error('Error adding supplier', err)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-brand-purple md:ml-[6rem] text-xs  mt-4 w-[9rem] mx-4  p-2 flex items-center justify-center rounded-md shadow-md text-white cursor-pointer "
      >
        <span className="text-base mr-2">
          <RiFileAddFill />
        </span>
        Add Supplier
      </button>
      {isOpen && (
        <div className=" flex justify-center overflow-y-auto inset-2 fixed p-2   items-center md:mt-[-4rem] mt-[4rem] z-50  ">
          <div className="  inset-0" onClick={closeModal}></div>
          <div className=" rounded-lg mt-[8rem] bg-white shadow-md w-[20rem] md:w-[20rem] lg:w-[25rem]   lg:p-2 lg:px-6 p-2 px-4">
            <div className="text-center ">
              <h1 className="text-base font-bold mb-2">Supplier </h1>
              <div className="border-b-2 border-transparent border-gradient my-[0.3rem] mb-4"></div>
            </div>
            <h2 className="text-[14px] font-bold mb-2">Supplier Info</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 text-[12px] font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className=" border rounded text-[12px] w-full py-[0.2rem] lg:py-[0.5rem] px-3  lg:p-2 focus:outline-brand-blue "
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="contactPerson"
                  className="block text-gray-700 text-[12px] font-bold mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                >
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className=" border rounded text-[12px] w-full py-[0.2rem] lg:py-[0.5rem] px-3  lg:p-2 focus:outline-brand-blue"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 text-[12px] font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base "
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className=" border rounded text-[12px] w-full py-[0.2rem] lg:py-[0.5rem] px-3  lg:p-2 focus:outline-brand-blue"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="companyEmail"
                  className="block text-gray-700 text-[12px] font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base "
                >
                  Company Email
                </label>
                <input
                  type="text"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className=" border rounded text-[12px] w-full py-[0.2rem] lg:py-[0.5rem] px-3  lg:p-2 focus:outline-brand-blue  "
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="address"
                  className="block text-gray-700 text-[12px] font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className=" border rounded text-[12px] w-full py-[0.2rem] lg:py-[0.5rem] px-3  lg:p-2 focus:outline-brand-blue"
                  required
                />
              </div>
              <div className="flex flex-row gap-x-4">
                <div className="mb-2  ">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 text-[12px] font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className=" border text-[14px] rounded w-[100%] py-[0.1rem]  lg:py-[0.3rem] focus:outline-brand-blue "
                    required
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="state"
                    className="block text-gray-700 text-[12px] font-bold   lg:mb-[0.2rem] lg:text-base"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className=" border text-[14px] rounded w-[100%] py-[0.1rem]  lg:py-[0.3rem] focus:outline-brand-blue  "
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-4">
                <div className="mb-2">
                  <label
                    htmlFor="zipCode"
                    className="block text-gray-700 text-[12px] font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className=" border text-[14px] rounded w-[100%] py-[0.1rem]  lg:py-[0.3rem]  focus:outline-brand-blue "
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-gray-700 text-[12px] font-bold mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className=" border text-[14px] rounded w-[100%] py-[0.1rem]  lg:py-[0.3rem] focus:outline-brand-blue "
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row gap-x-2 justify-center ">
                <button
                  type="submit"
                  className=" shadow-sm bg-blue-400 w-[50%] hover:bg-blue-700 text-white font-bold py-[0.2rem] p-2 text-sm rounded   whitespace-nowrap "
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDiscardChanges}
                  className="bg-red-500 hover:bg-red-700 w-[50%] text-white font-bold py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline"
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

export default AddModal
