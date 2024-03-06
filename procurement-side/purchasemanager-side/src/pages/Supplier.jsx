import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import Heading from '../components/Header/supplierheading'
// import Addsupplierbtn from '../components/button/addvendor'
import AddSupplier from '../components/Modals/AddSupplier'
// import PurchaseRequest from '../components/Modals/PurchaseRequest.jsx'
// import EditForm from '../components/Modals/EditSupplier'
// import SearchBar from '../components/search/searchbar'
import Row_supplier from '../components/SupplierData/Row_supplier'

const Supplier = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <NavBarMobile />
      <Heading />
      <AddSupplier />
      {/* <PurchaseRequest /> */}
      <Row_supplier />
      {/* <EditForm /> */}
      {/* <Addsupplierbtn /> */}
      {/* <SearchBar /> */}
    </div>
  )
}

export default Supplier
