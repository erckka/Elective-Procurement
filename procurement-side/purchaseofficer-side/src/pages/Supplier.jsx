import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import Heading from '../components/Header/supplierheading'
import Row_supplier from '../components/SupplierData/Row_supplier'

// import Addsupplierbtn from '../components/button/addvendor'
// import AddSupplier from '../components/Modals/AddSupplier'
// // import EditForm from '../components/Modals/EditSupplier'
// // import SearchBar from '../components/search/searchbar'
// import Row_supplier from '../components/SupplierData/Row_supplier'
const Supplier = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <NavBarMobile />
      <Heading />
      <Row_supplier />
      {/* <AddSupplier />
      <Row_supplier /> */}
      {/* <EditForm /> */}
      {/* <Addsupplierbtn /> */}
      {/* <SearchBar /> */}
    </div>
  )
}

export default Supplier
