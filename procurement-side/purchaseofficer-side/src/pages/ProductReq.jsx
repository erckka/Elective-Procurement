import React from 'react'
import PRheading from '../components/Header/prheading'
import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import ProductReq from '../components/ProductReq/ProductReq'

const PurchaseReq = () => {
  return (
    <div className="flex flex-col  ">
      <NavBar />
      <NavBarMobile />
      <PRheading />
      <ProductReq />
    </div>
  )
}

export default PurchaseReq
