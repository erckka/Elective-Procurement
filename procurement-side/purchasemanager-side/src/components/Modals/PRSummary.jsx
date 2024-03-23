import React, { useState, useEffect } from 'react'
import PRdata from '../ProductReq/PRdata'
import CloseBtn from '../Buttons/CloseBtn'
import InputField from '../InputField/InputField'

const PRSummary = ({ closeModal, type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [total, setTotal] = useState(0)

  const openModal = () => {
    setIsOpen(true)
  }

  const nextEntry = () => {
    if (currentIndex < PRdata.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const totalAmount = () => {
    let totalAmount = 0
    PRdata[currentIndex].Items.forEach((item) => {
      const itemTotal =
        type === 'PurchaseOrder' ? item.Qty * item.UnitPrice : item.Qty
      totalAmount += itemTotal
    })
    return totalAmount
  }

  const handleInputChange = (index, value) => {
    const updatedItems = [...PRdata[currentIndex].Items]
    updatedItems[index].UnitPrice = value
    const newTotal = totalAmount()
    setTotal(newTotal)
  }

  useEffect(() => {
    const newTotal = totalAmount()
    setTotal(newTotal)
  }, [PRdata, currentIndex, type])

  useEffect(() => {
    // Reset total when currentIndex or type changes
    setTotal(0)
  }, [currentIndex, type])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow bg-[#00000080] ">
      <div className="bg-white flex items-center flex-col overflow-y-auto no-scrollbar max-h-[600px]  p-4">
        <h1 className="title flex text-center  font-bold py-1 mt-2 ">
          {type === 'PurchaseRequest'
            ? 'Purchase Request Summary'
            : 'Purchase Order Summary'}
        </h1>

        <div className="border-b-[0.1rem] w-[16rem] border-transparent border-gradient my-[0.3rem] mb-4"></div>

        <div className="flex justify-start mt-1 text-sm">
          <div className=" text-left">
            <div className="pt-1 px-4  grid grid-cols-2">
              <h1 className="  font-semibold ">Order Created:</h1>
              <h1 className="font-light ">03-24-2024</h1>
            </div>
            {type === 'PurchaseRequest' && (
              <div className="border-b border-black"></div>
            )}
            {type === 'PurchaseOrder' && (
              <div className="pt-1 px-4   grid grid-cols-2  ">
                <h1 className="  font-semibold">Order Paid:</h1>
                <h1 className="font-light ">03-24-2024</h1>
              </div>
            )}
            {type === 'PurchaseOrder' && (
              <div className="pt-1 px-4   grid grid-cols-2 border-b border-black mb-2 ">
                <h1 className="font-semibold ">Order Received:</h1>
                <h1 className="font-light mb-2 ">03-24-2024</h1>
              </div>
            )}
            {/* Supplier Info */}
            <div className="pt-1 px-4 border-b border-black">
              <h1 className="font-semibold">Supplier Name</h1>
              <h1 className="font-light mb-1 py-1">
                {PRdata[currentIndex].Supplier}
              </h1>
            </div>
            <div className="mb-3 p-3 px-4 border-b border-black">
              <h1 className="font-semibold">Buyer Info</h1>
              <div className="grid grid-cols-2 gap-y-1 px-3 py-1">
                <h1 className>Street:</h1>
                <h1 className="">{PRdata[currentIndex].Street}</h1>
                <h1 className>City:</h1>
                <h1 className="">{PRdata[currentIndex].City}</h1>
                <h1 className>Country:</h1>
                <h1 className="">{PRdata[currentIndex].Country}</h1>
                <h1 className>State:</h1>
                <h1 className="">{PRdata[currentIndex].State}</h1>
                <h1 className>Zip Code:</h1>
                <h1 className="">{PRdata[currentIndex].ZipCode}</h1>
              </div>
            </div>
            {/* <h1>Supplier Name</h1>
            <h1 className="font-light mb-4">{PRdata[currentIndex].Supplier}</h1>
            <h1 className="my-2">Buyer Info</h1>
            <div className="grid grid-cols-2 grid-rows-6">
              <h1 className>Street:</h1>
              <h1 className="font-light mb-2">{PRdata[currentIndex].Street}</h1>
              <h1 className>City:</h1>
              <h1 className="font-light mb-2">{PRdata[currentIndex].City}</h1>
              <h1 className>Country:</h1>
              <h1 className="font-light mb-2">
                {PRdata[currentIndex].Country}
              </h1>
              <h1 className>State:</h1>
              <h1 className="font-light mb-2">{PRdata[currentIndex].State}</h1>
              <h1 className>Zip Code:</h1>
              <h1 className="font-light mb-2">
                {PRdata[currentIndex].ZipCode}
              </h1>
            </div> */}
            <div className="">
              {/* <div>
                <h1 className="mb-2">Item Name</h1>
                <h1 className="font-light text-center">
                  {PRdata[currentIndex].Item}
                </h1>
              </div>
              <div>
                <h1 className="mb-2">Item Desc.</h1>
                <h1 className="font-light text-center">
                  {PRdata[currentIndex].ItemDesc}
                </h1>
              </div>
              <div>
                <h1 className="mb-2">Quantity:</h1>
                <h1 className="font-light text-center">
                  {PRdata[currentIndex].Qty}
                </h1>
              </div>
              {type === 'PurchaseOrder' && (
                <div>
                  <h1 className="mb-2">Unit Price:</h1>
                  <input type="number" className="font-light text-center" />
                </div>
              )} */}
              <table className="table-auto mb-3">
                <thead className="">
                  <tr className="">
                    <th className="px-4 py-2">Item Name</th>
                    <th className="px-4 py-2">Item Desc.</th>
                    <th className="px-4 py-2">Quantity</th>
                    {type === 'PurchaseOrder' && (
                      <th className="px-4 py-2">Unit Price</th>
                    )}
                  </tr>
                </thead>
                <tbody className="text-center ">
                  {PRdata[currentIndex].Items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{item.Item}</td>
                      <td className="px-4 py-2">{item.ItemDesc}</td>
                      <td className=" px-4 py-2">{item.Qty}</td>
                      {type === 'PurchaseOrder' && (
                        // <td className="px-4 py-2">{item.UnitPrice}</td>
                        <td className="">
                          <InputField
                            type="Unit Price"
                            value={item.UnitPrice}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                parseFloat(e.target.value)
                              )
                            }
                            className=" border border-blue-500  w-[20px]"
                          />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>{' '}
            {type === 'PurchaseOrder' && (
              <div className="text-center mt-3 flex justify-start border-t border-black p-4">
                <h1 className="font-semibold">Total Amount: </h1>
                <h1 className="ml-2">{isNaN(total) ? 0 : total}</h1>
              </div>
            )}
          </div>
        </div>
        <div className="w-full mt-5 flex justify-center mb-5">
          <CloseBtn closeModal={closeModal} type="close" />
        </div>
      </div>
    </div>
  )
}

export default PRSummary
