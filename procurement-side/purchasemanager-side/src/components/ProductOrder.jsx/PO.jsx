import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import PRdata from '../ProductReq/PRdata'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import PRSummary from '../Modals/PRSummary'
import Select from 'react-select'

const PO = () => {
  const [isPRSummaryModalOpen, setIsPRSummaryModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const openPRSummary = (row) => {
    setSelectedRow(row)
    setIsPRSummaryModalOpen(true)
  }

  const closeModal = () => {
    setIsPRSummaryModalOpen(false)
  }
  const handleStatusChange = (index, selectedOption) => {
    const updatedData = [...data]
    updatedData[index] = { ...updatedData[index], Status: selectedOption.value }
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
      width: '150px',
    },
    {
      name: 'Supplier',
      selector: (row) => row.Supplier,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Invoice No.',
      selector: (row) => row.OrderCreated,
      sortable: true,
      width: '140px',
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
        />
      ),
      sortable: true,
      width: '140px',
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
    <div className="mx-2 ml-6 mt-6 md:mx-6 md:ml-[6rem]">
      {isPRSummaryModalOpen && <PRSummary closeModal={closeModal} />}
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
        />
      </div>
    </div>
  )
}

export default PO
