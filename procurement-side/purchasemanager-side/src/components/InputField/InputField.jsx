import React from 'react'

export default function InputField({ type }) {
  let labelText = ''

  if (type === 'SupplierName') {
    labelText = 'Company Name'
  } else if (type === 'ContactPerson') {
    labelText = 'Contact Person'
  } else if (type === 'ContactNumber') {
    labelText = 'Contact Number'
  } else if (type === 'CompanyEmail') {
    labelText = 'Company Email'
  } else if (type === 'Address') {
    labelText = 'Address'
  } else if (type === 'City') {
    labelText = 'City'
  } else if (type === 'State') {
    labelText = 'State'
  } else if (type === 'ZipCode') {
    labelText = 'Zip Code'
  } else if (type === 'Country') {
    labelText = 'Country'
  }

  return (
    <div className="div">
      <label
        htmlFor="supplier"
        className="block text-[12px] font-bold my-[0.4rem] lg:mb-[0.2rem] lg:text-base"
      >
        {labelText}
      </label>
      <div className=" flex flex-col">
        <input
          type="text"
          name="suppliername"
          required
          className="border px-2 text-[14px] rounded  py-[0.2rem] lg:py-[0.3rem] focus:outline-brand-blue mb-2"
        />
      </div>
    </div>
  )
}
