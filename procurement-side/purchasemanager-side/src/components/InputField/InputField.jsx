import React from 'react'

export default function InputField({ type }) {
  let labelText = ''
  let htmlForValue = '' // Initialize htmlForValue

  if (type === 'SupplierName') {
    labelText = 'Company Name'
    htmlForValue = 'companyName'
  } else if (type === 'ContactPerson') {
    labelText = 'Contact Person'
    htmlForValue = 'contactPerson'
  } else if (type === 'ContactNumber') {
    labelText = 'Contact Number'
    htmlForValue = 'contactNumber'
  } else if (type === 'CompanyEmail') {
    labelText = 'Company Email'
    htmlForValue = 'companyEmail'
  } else if (type === 'Address') {
    labelText = 'Address'
    htmlForValue = 'address'
  } else if (type === 'City') {
    labelText = 'City'
    htmlForValue = 'city'
  } else if (type === 'State') {
    labelText = 'State'
    htmlForValue = 'state'
  } else if (type === 'ZipCode') {
    labelText = 'Zip Code'
    htmlForValue = 'zipCode'
  } else if (type === 'Country') {
    labelText = 'Country'
    htmlForValue = 'country'
  }

  return (
    <div className="div">
      <label
        htmlFor={htmlForValue}
        className="block text-[12px] font-bold my-[0.4rem] lg:mb-[0.2rem] lg:text-base"
      >
        {labelText}
      </label>
      <div className="flex flex-col">
        <input
          type="text"
          required
          className="border px-2 text-[14px] rounded py-[0.2rem] lg:py-[0.3rem] focus:outline-brand-blue mb-2"
        />
      </div>
    </div>
  )
}
