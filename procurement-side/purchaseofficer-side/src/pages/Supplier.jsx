import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import Heading from '../components/Header/supplierheading'
import Row_supplier from '../components/SupplierData/Row_supplier'

const Supplier = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <NavBarMobile />
      <Heading />
      <Row_supplier />
    </div>
  )
}

export default Supplier
