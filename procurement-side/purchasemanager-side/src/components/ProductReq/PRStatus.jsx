import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import PRData from './PRdata'
import { MdEmail } from 'react-icons/md'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import EmailModal from '../Modals/Email'
import PRSummary from '../Modals/PRSummary'

const PRStatus = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [isPRSummaryModalOpen, setIsPRSummaryModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const openEmailModal = (row) => {
    setSelectedRow(row)
    setIsEmailModalOpen(true)
  }

  const openPRSummary = (row) => {
    setSelectedRow(row)
    setIsPRSummaryModalOpen(true)
  }

  const closeModal = () => {
    setIsEmailModalOpen(false)
    setIsPRSummaryModalOpen(false)
  }
  const customStyles = {
    headRow: {
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
      },
    },
  }
  const columns = [
    {
      name: 'Purchase No.',
      selector: (row) => row.PRNumber,
      sortable: true,
    },
    {
      name: 'Supplier',
      selector: (row) => row.Supplier,
      sortable: true,
      hide: 'sm',
    },
    {
      name: 'Order Created',
      selector: (row) => row.OrderCreated,
      sortable: true,
      hide: 'sm',
    },
    {
      name: 'Status',
      selector: (row) => row.Status,
      sortable: true,
      cell: (row) => (
        <div
          className={`font-bold text-[12px] status-indicator ${
            row.Status.toLowerCase() === 'pending'
              ? 'text-orange-400'
              : row.Status.toLowerCase() === 'approved'
              ? 'text-green-700'
              : row.Status.toLowerCase() === 'rejected'
              ? 'text-red-700'
              : ''
          }`}
        >
          {row.Status}
        </div>
      ),
    },

    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex justify-right items-center gap-x-2">
          <PiDotsThreeDuotone
            className="bg-gray-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer"
            onClick={() => openPRSummary(row)}
          />
          <MdEmail
            className={`bg-blue-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer ${
              row.Status.toLowerCase() === 'rejected' ||
              row.Status.toLowerCase() === 'pending'
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            onClick={() => {
              if (
                row.Status.toLowerCase() !== 'rejected' &&
                row.Status.toLowerCase() !== 'pending'
              ) {
                openEmailModal(row)
              }
            }}
            disabled={
              row.Status.toLowerCase() === 'rejected' ||
              row.Status.toLowerCase() === 'pending'
            }
          />
        </div>
      ),
    },
  ]

  return (
    <div className="mx-2 ml-6 mt-6 md:mx-6 md:ml-[6rem] lg:mx-36 ">
      {isEmailModalOpen && <EmailModal closeModal={closeModal} />}
      {isPRSummaryModalOpen && (
        <PRSummary closeModal={closeModal} type="PurchaseRequest" />
      )}

      <div className="flex justify-center text-center whitespace-nowrap mt-12 my-4 font-bold mb-8">
        Product Requisition Status
      </div>
      <DataTable
        columns={columns}
        data={PRData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 15]}
        customStyles={customStyles}
      />
    </div>
  )
}

export default PRStatus
