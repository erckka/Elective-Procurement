import React from 'react'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import Heading from '../components/Header/supplierheading'
// import Addsupplierbtn from '../components/button/addvendor'
import AddSupplier from '../components/Modals/AddSupplier'
// import SearchBar from '../components/search/searchbar'
const Supplier = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <NavBarMobile />
      <Heading />
      <AddSupplier />
      {/* <Addsupplierbtn /> */}
      {/* <SearchBar /> */}
    </div>
  )
}

export default Supplier
