import { useState } from 'react'
import { MdShoppingBag } from 'react-icons/md'
import { BiSolidPurchaseTag } from 'react-icons/bi'
import { FaClipboardList } from 'react-icons/fa'
import { HiOutlineViewBoards, HiOutlineLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', icon: <HiOutlineViewBoards />, path: '/dashboard' },
    { title: 'Supplier', icon: <MdShoppingBag />, path: '/Supplier' },
    {
      title: 'Product Requisition',
      icon: <FaClipboardList />,
      path: '/ProductReq',
    },
    {
      title: 'Purchase Order',
      icon: <BiSolidPurchaseTag />,
      path: '/PurchaseOrder',
    },
    { title: 'Go Back', icon: <HiOutlineLogout />, path: '/go-back' },
  ]

  return (
    <div className="hidden md:block h-screen z-50">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-blue  h-screen p-5  pt-8 relative duration-300 'z-100'`}
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
              open && 'rotate-[360deg] h-16'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200  ${
              !open && 'scale-0'
            }`}
          >
            Procurement
          </h1>
        </div>
        <div className=" flex flex-col items-center mt-9 ">
          <img
            src="https://i.pinimg.com/originals/10/7f/bf/107fbfe59b4df60a921e04e804cc0561.jpg"
            alt="profile-pic"
            className={`w-[60px] h-[60px] rounded-full md:w-[60px] ${
              !open &&
              `w-[40px] h-[39px] rounded-full ml-3 md:w-[45px] md:h-[40px]`
            }`}
          />
          <h1
            className={`text-white text-[18px] mt-4 ${
              !open && 'scale-0 text-[3px]'
            }`}
          >
            Chen E. Lyn
          </h1>
        </div>

        <ul className="pt-[2rem]">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md m p-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 md:text-base hover:bg-gradient-color transition-all duration-300
            ${Menu.gap ? 'mt-12' : 'mt-2'} ${
                index === Menus.length - 1 && 'mt-40' // Add this line
              } ${index === 0 && 'hover:bg-gradient-color'} ${
                !open && 'w-[52px]'
              }`}
            >
              <NavLink to={Menu.path} className="flex items-center gap-x-4  ">
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
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default NavBar
