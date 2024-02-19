import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion'
import { HiOutlineViewBoards } from 'react-icons/hi'
import { MdShoppingBag, MdLocalShipping } from 'react-icons/md'
import { FaClipboardList, FaShippingFast } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClickAway = () => {
    if (isOpen) {
      setOpen(false)
    }
  }

  const closeMenuOnClick = () => {
    setOpen(false)
  }

  return (
    <div className="fixed z-50 w-[100%] lg:hidden">
      <div className="bg-dark-blue rounded-b-8 flex flex-row items-center justify-between p-8">
        <Hamburger toggled={isOpen} size={32} toggle={setOpen} color="white" />
        {/* Navbar icon */}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="shadow-4xl bg-dark-blue rounded-10 border-brand-black fixed left-0 right-0 top-[6\.15rem] flex flex-col items-center gap-5 border-4 py-[10rem] pt-10 text-[1rem] text-[#c9c9c9] md:text-[1.25rem]"
        >
          <NavLink to="/dashboard" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard border-gray    rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.5rem] py-4"
            >
              <HiOutlineViewBoards className="-ml-2 h-auto w-[40px]" />
              <p className="-ml-2 text-[24px]">Dashboard</p>
            </motion.button>
          </NavLink>
          <NavLink to="/dashboard" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard border-gray     hover:fill-brand-blue hover:text-brand-blue hover:border-brand-blue w-[26rem] rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.5rem] py-4"
            >
              <MdShoppingBag className="-ml-2 h-auto w-[40px]" />
              <p className="-ml-2 text-[24px]">Vendor</p>
            </motion.button>
          </NavLink>
          <NavLink to="/dashboard" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard border-gray     hover:fill-brand-blue hover:text-brand-blue hover:border-brand-blue w-[26rem] rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.5rem] py-4"
            >
              <FaClipboardList className="-ml-2 h-auto w-[40px]" />
              <p className="-ml-8 text-[24px] whitespace-nowrap">
                Product Requisition
              </p>
            </motion.button>
          </NavLink>

          <NavLink to="/dashboard" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard border-gray     hover:fill-brand-blue hover:text-brand-blue hover:border-brand-blue w-[26rem] rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.5rem] py-4"
            >
              <FaShippingFast className="-ml-2 h-auto w-[40px]" />
              <p className="-ml-8 text-[24px] whitespace-nowrap">
                Order Status
              </p>
            </motion.button>
          </NavLink>
        </motion.div>
      )}
    </div>
  )
}

export default NavBarMobile
