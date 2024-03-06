import React, { useState, useEffect } from 'react'

import { RiFileAddFill } from 'react-icons/ri'

const PurchaseRequest = () => {
  const [page, setPage] = useState(1)
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

  const [confirmationData, setConfirmationData] = useState(null)

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
    if (page === 1) {
      setPage(2)
    } else {
      // Logic to submit the form (e.g., send data to server)
      console.log('Form submitted:', formData)
      closeModal()
    }
  }

  const handleBack = () => {
    setPage(1)
  }

  const closeModal = () => {
    setPage(1)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
      const maxWidth = vw * 0.6 // 60% of viewport width
      const maxHeight = vh * 0.7 // 70% of viewport height
      document.documentElement.style.setProperty(
        '--modal-max-width',
        `${maxWidth}px`
      )
      document.documentElement.style.setProperty(
        '--modal-max-height',
        `${maxHeight}px`
      )
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-brand-purple md:ml-[20rem] lg:ml-[20rem] mt-4 w-[9rem] mx-8 h-auto p-2 flex items-center justify-center rounded-md shadow-md text-white cursor-pointer"
      >
        <span className="text-base mr-2">
          <RiFileAddFill />
        </span>
        Purchase Request
      </button>
      {isOpen && (
        <div className="flex justify-center overflow-y-auto inset-2 items-center md:mt-[2rem] mt-[1rem]">
          <div className="absolute inset-0" onClick={closeModal}></div>
          <div className="relative flex justify-center shadow-lg md:mx-[15rem] rounded-lg w-[18rem] md:w-[20rem] xl:w-1/4 z-50">
            <div className="p-6">
              <div className="text-center">
                <h1 className="text-xl font-bold mb-4 border-b-2 border-dark-blue">
                  Purchase Request{' '}
                </h1>
              </div>
              {page === 1 && (
                <>
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
                    <button
                      type="submit"
                      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
                    >
                      Next
                    </button>
                  </form>
                </>
              )}

              {page === 2 && (
                <>
                  <h2 className="text-md font-bold mb-4">Item Info </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label
                        htmlFor="itemName"
                        className="block text-gray-700 text-sm font-bold  mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                      >
                        Item Name
                      </label>
                      <input
                        type="text"
                        id="itemName"
                        name="itemName"
                        value={formData.itemName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-[0.1rem] lg:py-[0.3rem] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="quantity"
                        className="block text-gray-700 text-sm font-bold mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                      >
                        Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-[0.1rem] px-3 lg:py-[0.3rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="itemDescription"
                        className="block text-gray-700 text-sm font-bold mb-[0.1rem] lg:mb-[0.2rem] lg:text-base"
                      >
                        Item Description
                      </label>
                      <input
                        type="text"
                        id="itemDescription"
                        name="itemDescription"
                        value={formData.itemDescription}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-[0.1rem] px-3 lg:py-[0.3rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
                    >
                      Previous
                    </button>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
                    >
                      Next
                    </button>
                  </form>
                </>
              )}

              {page === 3 && (
                <>
                  <h2 className="text-md font-bold mb-4">Confirmation Page</h2>
                  <p>You are about to submit a purchase requisition.</p>
                  <p>Do you want to proceed?</p>
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Go Back
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmation}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Approve
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PurchaseRequest
