import React from 'react'
// import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import Heading from '../components/Header/supplierheading'
import AddModal from '../components/Modals/AddSupplier'
import Modal from '../components/Modals/TestModal'

const Supplier = () => {
  return (
    <div>
      <NavBar />

      <AddModal />
      <Heading />
      {/* <NavBarMobile /> */}
    </div>
  )
}

export default Supplier
