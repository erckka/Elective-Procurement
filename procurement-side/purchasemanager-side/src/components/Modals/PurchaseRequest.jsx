import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputField from '../InputField/InputField'
import { IoAddCircle } from 'react-icons/io5'
import CloseBtn from '../Buttons/CloseBtn'

function PurchaseRequest({ closeModal }) {
  const formArray = [1, 2]
  const [formNo, setFormNo] = useState(formArray[0])
  const [itemInfoCount, setItemInfoCount] = useState(1)

  const addNewItemInfo = () => {
    setItemInfoCount(itemInfoCount + 1)
  }

  const [state, setState] = useState({
    companyName: '',
    buyerName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    item: '',
    quantity: '',
    itemDescription: '',
  })

  const inputHandle = (e) => {
    console.log('Input changed:', e.target.name, e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const next = () => {
    console.log('Current state:', state)

    if (
      formNo === 1 &&
      state.companyName &&
      state.buyerName &&
      state.address &&
      state.city &&
      state.state &&
      state.zipCode &&
      state.country
    ) {
      setFormNo(formNo + 1)
    } else if (
      formNo === 2 &&
      state.item &&
      state.quantity &&
      state.itemDescription
    ) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fill up all input fields')
    }
  }

  const pre = () => {
    setFormNo(formNo - 1)
  }

  const finalSubmit = () => {
    if (state.item && state.quantity && state.itemDescription) {
      toast.success('Form submitted successfully')
    } else {
      toast.error('Please fill up all input fields')
    }
  }

  return (
    <div className="flex justify-center inset-0 absolute p-2 items-center min-h-lvh md:mt-[5px] mt-[120px]">
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md  p-5 bg-white ">
        <div className="flex justify-center items-center ">
          {formArray.map((v, i) => (
            <React.Fragment key={i}>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? 'bg-gradient-color'
                    : 'bg-slate-400'
                } h-[35px] flex justify-center items-center`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  key={`divider_${i}`}
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? 'bg-brand-purple'
                      : 'bg-slate-400'
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {formNo === 1 && (
          <div>
            <h1>Supplier Info</h1>
            <InputField
              type="SupplierName"
              value={state.companyName}
              onChange={inputHandle}
            />
            <h1>Customer Info</h1>
            <InputField
              type="Buyer"
              value={state.buyerName}
              onChange={inputHandle}
            />
            <InputField
              type="Address"
              value={state.address}
              onChange={inputHandle}
            />
            <div className="grid grid-cols-2 w-[100%] gap-x-4">
              <InputField
                type="City"
                value={state.city}
                onChange={inputHandle}
              />
              <InputField
                type="State"
                value={state.state}
                onChange={inputHandle}
              />
              <InputField
                type="ZipCode"
                value={state.zipCode}
                onChange={inputHandle}
              />
              <InputField
                type="Country"
                value={state.country}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-row gap-x-2 py-2 w-[100%]">
              <CloseBtn closeModal={closeModal} type="close" />
              <button
                onClick={next}
                className="bg-purple-400 text-white  font-bold py-[0.2rem] text-sm rounded flex-grow"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {formNo === 2 && (
          <div className=" max-h-[500px] overflow-y-scroll    ">
            <div className="flex flex-col mb-2">
              <div className="flex flex-row justify-between items-center">
                Item Info
                <IoAddCircle
                  className="text-purple-light text-lg mr-2"
                  onClick={addNewItemInfo} // Add this line to trigger adding new item info fields
                />
              </div>
              {[...Array(itemInfoCount)].map((_, index) => (
                <div key={index} className="flex flex-col mb-2">
                  {/* New item info UI */}
                  <InputField
                    type="Item"
                    value={state.item}
                    onChange={inputHandle}
                  />
                  <div className="grid grid-cols-3 w-[100%] gap-x-4">
                    <div className="">
                      <InputField
                        type="Quantity"
                        value={state.quantity}
                        onChange={inputHandle}
                        className=" border border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 ">
                      <InputField
                        type="ItemDescription"
                        value={state.itemDescription}
                        onChange={inputHandle}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Existing code for buttons */}
              <div className="mt-4 gap-3 flex justify-center items-center">
                <button
                  onClick={pre}
                  className="px-3 py-2 text-base rounded-md w-full text-white bg-purple-400"
                >
                  Previous
                </button>
                <button
                  onClick={finalSubmit}
                  className="px-3 py-2 text-base rounded-md w-full text-white bg-green-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PurchaseRequest
