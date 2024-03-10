import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import { SiGoogleforms } from 'react-icons/si'
import DataTable from 'react-data-table-component'
import { SupplierInfo as initialSupplierInfo } from '../SupplierData/SupplierInfo'
import EditModal from '../Modals/EditSupplier' // Import the EditModal component

const Row_supplier = () => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState(null)
  const [SupplierInfo, setSupplierInfo] = useState(initialSupplierInfo)

  const openEditModal = (supplier) => {
    setSelectedSupplier(supplier)
    setEditModalOpen(true)
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
          <PiDotsThreeDuotone className="bg-gray-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer" />
          <SiGoogleforms className="bg-purple-light text-white  text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer  " />
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
        customStyles={{
          headCells: {
            style: {
              padding: '6px', // Update padding to match Tailwind CSS spacing
            },
          },
          cells: {
            style: {
              padding: '2px', // Update padding to match Tailwind CSS spacing
            },
          },
          table: {
            style: {
              width: '100%',
            },
          },
        }}
      />
      {editModalOpen && (
        <EditModal
          isOpen={editModalOpen}
          closeModal={closeEditModal}
          initialData={selectedSupplier}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  )
}

export default Row_supplier
