"use client"
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import { useState } from "react";
// icons
import { HiBars4 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

import Link from "next/link";

function Header() {

const [isOpen , SetisOpen ] = useState(false)

const toggleButton =()=>{
  SetisOpen(!isOpen)
}




  return (
    <>
      {/* Homepage */}
      <div className="md:h-[132px] items-center overflow-hidden fixed top-0 w-full bg-white z-50 " >
      {/* Banner */}
      <header className="flex  text-[#22202E] items-center py-5  md:py-0 justify-between px-6 mt-3 text-xl " >
        <CiSearch className=" hidden md:block font-Clash " />
        <h2>Avion</h2>

        <div className=" hidden md:flex gap-2 text-xl" >
          <GrCart  />
          <CgProfile  />
        </div>

       {/* buttons */}
       <div className="flex gap-5 text-xl md:hidden font-santoshi z-50 " >
       <CiSearch className="  md:hidden " />
        {!isOpen?
           <button>  <HiBars4 onClick={toggleButton} /></button>
           :
           <button><MdClose onClick={toggleButton} /></button>
        }
       </div>

      </header>
      <div className=" h-[1px] hidden md:block w-[95%] mx-auto my-3 bg-slate-400  " ></div>
      <nav className="  " >
        <ul className={`flex flex-col absolute transition-all duration-300 right-[-10000px] top-[20px]  z-10 w-[50%] md:w-[90%] justify-center     text-center h-[100vh]  md:py-0 bg-white md:static md:items-start md:flex-row text-[#726E8D] text-sm gap-5 py-7  mx-auto ${isOpen? " right-[0px] " : "" }  `} >
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
