import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import PReqData from './PRdata'
import { FaCheck, FaTimes } from 'react-icons/fa'
import ApprovePR from '../Modals/ApprovePR'
import RejectPR from '../Modals/RejectPR'
import PRSummary from '../Modals/PRSummary'
import { PiDotsThreeDuotone } from 'react-icons/pi'

const ProductReq = () => {
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false)
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [isPRSummaryModalOpen, setIsPRSummaryModalOpen] = useState(false)

  const [selectedRow, setSelectedRow] = useState(null)

  const openApproveModal = (row) => {
    setSelectedRow(row)
    setIsApproveModalOpen(true)
  }

  const openRejectModal = (row) => {
    setSelectedRow(row)
    setIsRejectModalOpen(true)
  }
  const openPRSummary = (row) => {
    setSelectedRow(row)
    setIsPRSummaryModalOpen(true) // Fix the typo here
  }

  const closeModal = () => {
    setIsApproveModalOpen(false)
    setIsRejectModalOpen(false)
    setIsPRSummaryModalOpen(false)
  }

  const columns = [
    {
      name: 'Purchase No.',
      selector: (row) => row.PRNumber,
      sortable: true,
      width: '130px',
    },
    {
      name: 'Supplier',
      selector: (row) => row.Supplier,
      sortable: true,
      width: '100px',
    },
    {
      name: 'Order Created',
      selector: (row) => row.OrderCreated,
      sortable: true,
      width: '140px',
      hide: 'sm',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex justify-right items-center gap-x-2">
          <FaCheck
            className="bg-green-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer"
            onClick={() => openApproveModal(row)}
          />
          <FaTimes
            className="bg-red-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer"
            onClick={() => openRejectModal(row)}
          />
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
      {isApproveModalOpen && <ApprovePR closeModal={closeModal} />}
      {isRejectModalOpen && <RejectPR closeModal={closeModal} />}
      {isPRSummaryModalOpen && <PRSummary closeModal={closeModal} />}

      <div className="bg-dark-blue text-white py-[0.25rem] px-2 flex justify-center w-[12rem] whitespace-nowrap rounded-sm mt-6 my-4">
        Pending For Approval
      </div>
      <DataTable
        columns={columns}
        data={PReqData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 15]}
      />
    </div>
  )
}

export default ProductReq