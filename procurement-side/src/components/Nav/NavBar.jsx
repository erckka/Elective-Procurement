import { useState } from 'react'
import { MdShoppingBag } from 'react-icons/md'
import { BiSolidPurchaseTag } from 'react-icons/bi'
import { FaClipboardList } from 'react-icons/fa'

import { HiOutlineViewBoards, HiOutlineLogout } from 'react-icons/hi'

const App = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', icon: <HiOutlineViewBoards /> },
    { title: 'Supplier', icon: <MdShoppingBag /> },
    { title: 'Product Requisition', icon: <FaClipboardList /> },
    { title: 'Purchase Order', icon: <BiSolidPurchaseTag /> },
    { title: 'Go Back', icon: <HiOutlineLogout /> },
  ]

  return (
    <div className="flex  md:block">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-blue h-screen p-5  pt-8 relative duration-300 `}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-blue
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Logo
          </h1>
        </div>
        <ul className="pt-[6rem]">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 md:text-xl
              ${Menu.gap ? 'mt-12' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <span className={`text-white gradient-color rounded-full p-2`}>
                {Menu.icon}
              </span>
              <span
                className={`${
                  !open && 'hidden'
                } origin-left duration-200 text-gradient-color`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default App
