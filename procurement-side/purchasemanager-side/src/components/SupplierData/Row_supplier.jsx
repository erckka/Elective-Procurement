import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import { SiGoogleforms } from 'react-icons/si'
import DataTable from 'react-data-table-component'
import { SupplierInfo as initialSupplierInfo } from '../SupplierData/SupplierInfo'
import EditModal from '../Modals/EditSupplier'
import SupplierSumm from '../Modals/SupplierSumm'
import PurchaseReqModal from '../Modals/PurchaseRequest' // Renamed the import
const Row_supplier = () => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState(null)
  const [SupplierInfo, setSupplierInfo] = useState(initialSupplierInfo)
  const [SupplierSummary, setSupplierSummary] = useState(false)
  const [PurchaseReqOpen, setPurchaseReqOpen] = useState(false) // Renamed the state variable

  const [selectedRow, setSelectedRow] = useState(null)

  const openEditModal = (supplier) => {
    setSelectedSupplier(supplier)
    setEditModalOpen(true)
  }
  const openSupplierSummary = (row) => {
    setSelectedRow(row)
    setSupplierSummary(true)
  }
  const openPurchaseReq = (row) => {
    setSelectedRow(row)
    setPurchaseReqOpen(true)
  }

  const closeEditModal = () => {
    setSelectedSupplier(null)
    setEditModalOpen(false)
  }

  const handleSaveChanges = (formData) => {
    const updatedSupplierInfo = SupplierInfo.map((supplier) =>
      supplier.id === formData.id ? formData : supplier
    )
    setSupplierInfo(updatedSupplierInfo)
    console.log('Changes saved:', formData)
    closeEditModal() // Close modal after saving changes
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
      name: 'Supplier Name',
      selector: (row) => row.companyName,
      sortable: true,
    },
    {
      name: 'Contact Number',
      selector: (row) => row.contactNumber,
      sortable: true,
    },
    {
      name: 'Contact Person',
      selector: (row) => row.contactPerson,
      sortable: true,
      hide: 'md',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-x-2">
          <CiEdit
            onClick={() => openEditModal(row)}
            className="bg-blue-500 text-white  text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer"
          />
          <PiDotsThreeDuotone
            onClick={() => openSupplierSummary(row)}
            className="bg-gray-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer"
          />
          <SiGoogleforms
            className="bg-purple-light text-white  text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer  "
            onClick={() => openPurchaseReq(row)}
          />
        </div>
      ),
    },
  ]
  console.log('SupplierInfo:', SupplierInfo) // Check SupplierInfo array

  return (
    <div className="flex flex-col mx-4 mt-10  md:mx-6 md:ml-[6rem] lg:mx-28">
      <DataTable
        columns={columns}
        data={SupplierInfo}
        dense
        selectableRows={false}
        selectableRowsVisible={false}
        pagination
        paginationPosition="bottom"
        className=" rounded-lg shadow-sm"
        customStyles={customStyles}
      />
      {editModalOpen && (
        <EditModal
          isOpen={editModalOpen}
          closeModal={closeEditModal}
          initialData={selectedSupplier}
          onSave={handleSaveChanges}
        />
      )}
      {SupplierSummary && selectedRow && (
        <SupplierSumm
          isOpen={SupplierSummary}
          closeModal={() => setSupplierSummary(false)}
          rowData={selectedRow}
        />
      )}
      {PurchaseReqOpen && selectedRow && (
        <PurchaseReqModal // Changed the component name here
          isOpen={PurchaseReqOpen}
          closeModal={() => setPurchaseReqOpen(false)}
          rowData={selectedRow}
        />
      )}
    </div>
  )
}

export default Row_supplier
