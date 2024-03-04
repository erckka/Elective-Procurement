import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import PReqData from './PRdata'
import { FaCheck, FaTimes } from 'react-icons/fa'
import ApprovePR from '../Modals/ApprovePR'
import RejectPR from '../Modals/RejectPR'

const ProductReq = () => {
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false)
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const openApproveModal = (row) => {
    setSelectedRow(row)
    setIsApproveModalOpen(true)
  }

  const openRejectModal = (row) => {
    setSelectedRow(row)
    setIsRejectModalOpen(true)
  }

  const closeModal = () => {
    setIsApproveModalOpen(false)
    setIsRejectModalOpen(false)
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
        <div className="flex justify-right items-center">
          <FaCheck
            className="bg-green-700 text-white rounded-sm w-4 h-4 mr-2 lg:w-6 lg:h-8 cursor-pointer"
            onClick={() => openApproveModal(row)}
          />
          <FaTimes
            className="bg-red-700 text-white rounded-sm w-4 h-4 mr-2 lg:w-6 lg:h-8 cursor-pointer"
            onClick={() => openRejectModal(row)}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="mx-2 ml-6 mt-6">
      {isApproveModalOpen && <ApprovePR closeModal={closeModal} />}
      {isRejectModalOpen && <RejectPR closeModal={closeModal} />}
      <div className="bg-dark-blue text-white py-[0.25rem] px-2 flex justify-center w-[12rem] whitespace-nowrap rounded-sm mt-6">
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
