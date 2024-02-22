import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion'
import { MdShoppingBag } from 'react-icons/md'
import { BiSolidPurchaseTag } from 'react-icons/bi'
import { HiOutlineViewBoards, HiOutlineLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { FaClipboardList } from 'react-icons/fa'

const NavBarMobile = () => {
  const [isOpen, setOpen] = useState(false)

  const closeMenuOnClick = () => {
    setOpen(false)
  }

  return (
    <div className="fixed z-20 w-[100%] md:hidden">
      <div className="bg-dark-blue  rounded-b-8 flex flex-row items-center justify-between p-6">
        <img
          src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design-1068x974.png"
          alt="logo"
          className="w-[60px] h-[60px]  "
        />

        <Hamburger
          toggled={isOpen}
          size={32}
          toggle={setOpen}
          color="#f6f6f6"
          label="Show menu"
          rounded
        />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="shadow-4xl bg-dark-blue rounded-10   fixed left-0 right-0 top-[6\.15rem] flex flex-col items-center gap-5 border-4 py-[10rem] pt-10 text-[1rem] text-[#c9c9c9] md:text-[1.25rem] "
        >
          <div className="flex ">
            <img
              src="https://i.pinimg.com/originals/10/7f/bf/107fbfe59b4df60a921e04e804cc0561.jpg"
              alt="profile-pic"
              className="w-[60px] h-[60px] rounded-full "
            />{' '}
          </div>
          <h1 className="text-white text-[18px]"> Chen E. Lyn</h1>

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
              className="dashboard border-gray  gradient-outline rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.5rem] py-4  "
            >
              <HiOutlineViewBoards className="-ml-8 h-auto w-[40px]" />
              <p className="-ml-2 text-[14px]">Dashboard</p>
            </motion.button>
          </NavLink>
          <NavLink to="/supplier" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard gradient-outline rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[6.2rem] py-4"
            >
              <MdShoppingBag className="-ml-12 h-auto w-[40px]" />
              <p className="-ml-2 text-[14px]">Supplier</p>
            </motion.button>
          </NavLink>
          <NavLink to="/pr" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className="dashboard gradient-outline rounded-10 grid grid-cols-2 items-center whitespace-nowrap gap-5 border-4 px-[3.7rem] py-4 "
            >
              <FaClipboardList className="-ml-1 h-auto w-[40px]" />
              <p className="-ml-8 text-[14px] whitespace-nowrap">
                Product Requisition
              </p>
            </motion.button>
          </NavLink>
          <NavLink to="/po" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className=" dashboard gradient-outline rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[3.7rem] py-4 "
            >
              <BiSolidPurchaseTag className="-ml-2 h-auto w-[40px]" />
              <p className="-ml-2 text-[14px]">Purchase Order</p>
            </motion.button>
          </NavLink>
          <NavLink to="/goback" onClick={closeMenuOnClick}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 1 / 10,
              }}
              className=" hover:bg-blue-700 dashboard gradient-outline rounded-10 grid grid-cols-2 items-center gap-5 border-4 px-[5.8rem] py-4 "
            >
              <HiOutlineLogout className="-ml-10 h-auto w-[40px] " />
              <p className="-ml-2 text-[14px] font-semibold">Go Back</p>
            </motion.button>
          </NavLink>
        </motion.div>
      )}
    </div>
  )
}

export default NavBarMobile
