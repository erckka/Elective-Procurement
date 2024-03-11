import React from 'react'
import HeadingPO from '../components/Header/prorder'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PO from '../components/ProductOrder.jsx/PO'

const PurchaseOrder = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <NavBarMobile />
      <HeadingPO />
      <PO />
    </div>
  )
}

export default PurchaseOrder
