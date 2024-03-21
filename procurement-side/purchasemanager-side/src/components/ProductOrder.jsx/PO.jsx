import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import PRdata from '../ProductReq/PRdata'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import PRSummary from '../Modals/PRSummary'
import Select from 'react-select'

const PO = () => {
  const [isPRSummaryModalOpen, setIsPRSummaryModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [data, setData] = useState(PRdata)

  const customStyles = {
    headRow: {
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
      },
    },
  }

  const openPRSummary = (row) => {
    setSelectedRow(row)
    setIsPRSummaryModalOpen(true)
  }

  const closeModal = () => {
    setIsPRSummaryModalOpen(false)
  }

  const handleStatusChange = (index, selectedOption) => {
    const updatedData = [...data]
    updatedData[index].Status = selectedOption.value
    setData(updatedData)
  }

  const handleInvoiceChange = (index, e) => {
    const { value } = e.target
    const updatedData = [...data]
    updatedData[index].OrderCreated = value
    setData(updatedData)
  }

  const statusOptions = [
    { label: 'Paid', value: 'Paid' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Received', value: 'Received' },
  ]

  const columns = [
    {
      name: 'PO#',
      selector: (row) => row.PRNumber,
      sortable: true,
    },
    {
      name: 'Supplier',
      selector: (row) => row.Supplier,
      sortable: true,
    },
    {
      name: 'Invoice No.',
      cell: (row, index) => (
        <input
          type="text"
          onChange={(e) => handleInvoiceChange(index, e)}
          className="h-8 px-2 border rounded-md focus:outline-none w-[7rem] focus:ring focus:ring-blue-300"
        />
      ),
      sortable: true,
    },
    {
      name: 'Status',
      cell: (row, index) => (
        <Select
          options={statusOptions}
          value={statusOptions.find((option) => option.value === row.Status)}
          onChange={(selectedOption) =>
            handleStatusChange(index, selectedOption)
          }
          menuPosition="fixed" // Fix the dropdown menu position
        />
      ),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex justify-right items-center gap-x-2">
          <PiDotsThreeDuotone
            className="bg-gray-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer"
            onClick={() => openPRSummary(row)}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="mx-2 mt-6">
      {isPRSummaryModalOpen && (
        <PRSummary closeModal={closeModal} type="PurchaseOrder" />
      )}{' '}
      <div className="flex justify-center text-center whitespace-nowrap mt-12 my-4 font-bold">
        Purchase Order
      </div>
      <div className="overflow-auto rounded-lg shadow w-full">
        <DataTable
          columns={columns}
          data={PRdata}
          pagination
          paginationPerPage={2}
          paginationRowsPerPageOptions={[10, 15]}
          customStyles={customStyles}
        />
      </div>
    </div>
  )
}

export default PO
