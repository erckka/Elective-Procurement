import React from 'react'
import PRheading from '../components/Header/prheading'

import NavBarMobile from '../components/Nav/NavBarMobile'
import NavBar from '../components/Nav/NavBar'
import PRStatus from '../components/ProductReq/PRStatus'

const ProductStatus = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="md:h-screen mb-4 md:mb-0">
        <NavBar />
        <NavBarMobile />
      </div>
      <div className="h-screen md:w-full flex flex-col overflow-x-auto">
        <PRheading />
        <PRStatus />
      </div>
    </div>
  )
}

export default ProductStatus
