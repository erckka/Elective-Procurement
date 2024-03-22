import React from 'react'
import { MdEmail } from 'react-icons/md'

const Email = ({ closeModal }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow bg-[#00000080]">
      <div className="bg-white flex justify-center shadow-md flex-col items-center w-48">
        <h1 className="text-green-700 font-bold text-center text-[12px] mt-4">
          You are about to send an email
        </h1>
        <img
          src="https://logolook.net/wp-content/uploads/2021/06/Gmail-Logo.png"
          className=" rounded-sm  h-16 mt-4 my-4 cursor-pointer"
        />
        <h1 className="font-bold text-center text-[9px] my-2">
          This will send an email to supplier{' '}
        </h1>
        <div className="flex flex-row gap-x-2 py-2">
          <button className="bg-green-500 w-[5rem] font-bold py-[0.2rem] text-[12px]">
            Proceed
          </button>
          <button
            className="bg-red-500 w-[5rem] font-bold rounded-sm text-[12px]"
            onClick={closeModal}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default Email
