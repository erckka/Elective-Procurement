import React from 'react'
import { PiDotsThreeDuotone } from 'react-icons/pi'
import { SiGoogleforms } from 'react-icons/si'

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
      name: 'Contact Person',
      selector: (row) => row.Contact_Person,
      sortable: true,
      hide: 'md',
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex flex-row gap-x-2">
          <PiDotsThreeDuotone className="bg-gray-700 text-white text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer" />
          <SiGoogleforms className="bg-purple-light text-white  text-[18px] rounded-sm shadow-sm w-auto h-6 lg:h-6 p-[0.2rem] cursor-pointer" />
        </div>
      ),
    },
  ]

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
        className="rounded-lg shadow-sm"
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
