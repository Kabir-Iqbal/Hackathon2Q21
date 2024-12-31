"use client"
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import { useState } from "react";
// icons
import { HiBars4 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

import { Product } from "../Data/product";
import { useAppSelector } from "../lib/store/hooks";

import Link from "next/link";


function Header() {

  const [isOpen, SetisOpen] = useState(false)

  const toggleButton = () => {
    SetisOpen(!isOpen)
  }

  const itemid = useAppSelector(state => state.cart.item)

  return (
    <>
      {/* Homepage */}
      <div className=" max-w-[1440px] mx-auto fixed top-0 w-full bg-white z-50 " >
        {/* Banner */}
        <header className="flex h-[51px]  text-[#22202E] items-center py-4  md:py-0 justify-between px-6 mt-3 text-xl " >
          <CiSearch className="order-2 text-2xl  md:order-1 absolute z-50 block right-32  md:static  font-Clash " />
          <h2 className="ordere-1 md:order-2" >Avion</h2>

          <div className="flex order-3 gap-3 text-2xl z-50 absolute right-14 md:flex md:static cursor-pointer  " >
            <div className="relative  "  >
              <Link href="./Cart"  > <GrCart /> </Link>
              <span className=" absolute bg-[#2A254B] text-white -top-3 -right-2 h-4 w-4 flex items-center justify-center rounded-full text-[14px]   " >
                {itemid.length}
              </span>
            </div>
            <CgProfile />
          </div>

          {/* buttons */}
          <div className="flex order-4 gap-5 text-2xl md:hidden font-santoshi z-50 " >

            {!isOpen ?
              <button>  <HiBars4 onClick={toggleButton} /></button>
              :
              <button><MdClose onClick={toggleButton} /></button>
            }
          </div>

        </header>

        <div className=" h-[1px] hidden md:block w-[95%] mx-auto my-[6px] bg-slate-400  " ></div>

        <nav className="flex relative   " >
          <ul className={`flex flex-col md:h-[55px] md:flex-row md:justify-center   absolute right-0  z-10 w-[50%] md:w-[90%] justify-center  h-screen   text-center  md:py-0 bg-white md:static md:items-start  text-[#726E8D] text-sm gap-5 py-7  md:mx-auto ${isOpen ? " top-[5px] right-0 " : "top-[-100vh] "}  `} >
            {/* <ul className={`flex flex-col  absolute right-0 top-[80px] z-10 w-[50% h-full bg-white   `} > */}
            <li><Link href="/" > Home </Link> </li>
            <li><Link href="/ProductListing"> Product Listing </Link> </li>
            <li><Link href="/About" >About Us  </Link></li>
            <li><Link href="/Contact" > Contact Us  </Link> </li>
            <li>Ceramics </li>
            <li> Tables  </li>
            <li>Crockery </li>
            <li>Cutlery</li>
          </ul>

        </nav>
      </div>

    </>
  )
}

export default Header
