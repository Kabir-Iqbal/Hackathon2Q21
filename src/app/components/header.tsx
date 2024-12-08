"use client"
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

import { useState } from "react";
// icons
import { HiBars4 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";


function Header() {

const [isOpen , SetisOpen ] = useState(false)

const toggleButton =()=>{
  SetisOpen(!isOpen)
}




  return (
    <>
      {/* Homepage */}
      <div className=" md:h-[132px] items-center overflow-hidden " >
      {/* Banner */}
      <header className="flex text-[#22202E] items-center py-5  md:py-0 justify-between px-6 mt-3 text-xl " >
        <CiSearch className=" hidden md:block " />
        <h2>Avion</h2>

        <div className=" hidden md:flex gap-2 text-xl" >
          <GrCart />
          <CgProfile  />
        </div>

       {/* buttons */}
       <div className="flex gap-5 text-xl md:hidden " >
       <CiSearch className="  md:hidden " />
        {!isOpen?
           <button><HiBars4  onClick={toggleButton} /></button>
           :
           <button><MdClose onClick={toggleButton} /></button>
        }
       </div>

      </header>
      <div className=" h-[1px] hidden md:block w-[95%] mx-auto my-3 bg-slate-400  " ></div>
      <nav className="" >
        <ul className={`flex flex-col absolute right-1 top-[-10000px] z-10 bg-gray-300 w-[60%] text-center h-[100vh] py-10 md:py-0  md:bg-white md:static md:items-start md:flex-row text-[#726E8D] text-sm gap-5 justify-center  mx-auto ${isOpen? "top-[80px]" : "" }  `} >
          <li>Plant pots </li>
          <li>Ceramics </li>
          <li> Tables  </li>
          <li> Chairs  </li> 
          <li>Crockery </li>
          <li>Tableware </li>
          <li>Cutlery</li>
        </ul>

      </nav>
     </div> 
    </>
  )
}

export default Header
