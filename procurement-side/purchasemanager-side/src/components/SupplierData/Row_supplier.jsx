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
    // {
    //   name: 'Email',
    //   selector: (row) => row.Company_Email,
    //   sortable: false,
    // },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex">
          <CiEdit className="bg-brand-blue text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6" />
          <PiDotsThreeDuotone className="bg-slate-600 text-white rounded-sm w-5 h-5 mr-2 lg:w-6 lg:h-6" />
          <FaClipboard className="bg-brand-purple text-white rounded-sm w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      ),
    },
  ]

  return (
    <div className="flex flex-col mx-4 mt-10 lg:ml-10 lg:mx-4  ">
      <DataTable
        columns={columns}
        data={SupplierInfo}
        dense
        selectableRows={false} // Set to false to remove checkbox column
        selectableRowsVisible={false} // Set to false to hide checkbox
        pagination
        paginationPosition="bottom" // Set pagination to the bottom
        className="border gap-1  "
        customStyles={{
          headCells: {
            style: {
              padding: '2px',
            },
          },
          cells: {
            style: {
              padding: '2px',
            },
          },
          table: {
            style: {
              width: '100%', // Set the width of the table to 100%
            },
          },
        }}
      />
    </div>
  )
}

export default Row_supplier
