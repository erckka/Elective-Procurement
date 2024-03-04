import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import { FaClipboard } from 'react-icons/fa'
import { SupplierInfo } from './SupplierInfo'
import DataTable from 'react-data-table-component'

const Row_supplier = () => {
  const columns = [
    {
      name: 'Supplier Name',
      selector: (row) => row.Supplier_Name,
      sortable: true,
    },
    {
      name: 'Contact Number',
      selector: (row) => row.Contact_Number,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex">
          <CiEdit className="bg-blue-500 text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6" />
          <PiDotsThreeDuotone className="bg-gray-700 text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6" />
          <FaClipboard className="bg-purple-500 text-white rounded-sm w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col mx-4 mt-10  md:mx-6 md:ml-[6rem]">
      <DataTable
        columns={columns}
        data={SupplierInfo}
        dense
        selectableRows={false}
        selectableRowsVisible={false}
        pagination
        paginationPosition="bottom"
        className="border border-gray-200 rounded-lg shadow-sm"
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
    </div>
  )
}

export default Row_supplier
