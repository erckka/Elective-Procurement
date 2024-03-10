import { RiFileAddFill } from 'react-icons/ri'
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import CloseBtn from '../Buttons/CloseBtn'

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
  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., send data to server)
    console.log('Changes saved:', formData)
    closeModal()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Logic for form submission
  }

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-brand-purple md:ml-[6rem] text-xs mt-4 w-[9rem] mx-4 p-2 flex items-center justify-center rounded-md shadow-md text-white cursor-pointer"
      >
        <span className="text-base mr-2">
          <RiFileAddFill />
        </span>
        Add Supplier
      </button>
      {isOpen && (
        <div className="flex justify-center overflow-y-auto inset-2 fixed p-2 items-center md:mt-[-4rem] mt-[4rem] z-50">
          <div className="inset-0" onClick={closeModal}></div>
          <div className="rounded-lg mt-[8rem] bg-white shadow-md w-[20rem] md:w-[20rem] lg:w-[25rem] lg:p-2 lg:px-6 p-2 px-4">
            <div className="text-center">
              <h1 className="text-base font-bold mb-2">Supplier </h1>
              <div className="border-b-2 border-transparent border-gradient my-[0.3rem] mb-4"></div>
            </div>
            <h2 className="text-[14px] font-bold mb-2">Supplier Info</h2>
            <form onSubmit={handleSubmit}>
              <div className="supplier-credentials">
                <InputField type="SupplierName" />
                <InputField type="ContactPerson" />
                <InputField type="CompanyEmail" />
                <InputField type="Address" />
                <div className="grid grid-cols-2 w-[100%]  gap-x-4">
                  <InputField type="City" />
                  <InputField type="State" />
                  <InputField type="ZipCode" />
                  <InputField type="Country" />
                </div>
              </div>
              <div className="flex flex-row gap-x-2  mt-4 ">
                <button
                  type="submit"
                  className=" shadow-sm bg-blue-400 w-[50%] hover:bg-blue-700 text-white font-bold py-[0.2rem] p-2 text-sm rounded   whitespace-nowrap "
                >
                  Save Changes
                </button>
                <CloseBtn type="discard" closeModal={closeModal} />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddModal
