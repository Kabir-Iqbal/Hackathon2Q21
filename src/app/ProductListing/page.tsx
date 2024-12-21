"use client"
import Header from "../components/header"
import Image from "next/image"
import { useState } from "react"
import { FaCaretDown } from "react-icons/fa6";
import Footer from "../components/footer";
import Link from "next/link";

// icons
import { HiBars4 } from "react-icons/hi2";
import { MdClose, MdKeyOff } from "react-icons/md";

// imported products from Data
import { Product } from "../Data/product";



const Page = () => {
  const [showOptions, SetShowOptions] = useState({
    Category: false,
    ProductType: false,
    Price: false,
    Brand: false,
    Dateadded: false,
  })

  const toggleButton = (key : keyof typeof showOptions ) => {
    SetShowOptions((prev) => ({ ...prev, [key]: !prev[key]  }))
  }

  // responsive
  const [showlinks, SetShowlinks] = useState(false)

  const toogle = ()=>{
     SetShowlinks(!showlinks)

  }

  return (
    <div className="max-w-[1440px] mx-auto w-[100%] " >
      {/* Hedaer */}
      <Header />
      {/* Page-1 */}
      <div className=" pt-[132px] w-full h-[290px] " >
        <Image className="w-full h-full " src="/images/Frame.png" width={1400} height={280} alt="Frame pic" />
      </div>

       {/* responsive */}
       <div className="flex gap-3 cursor-pointer items-center md:hidden px-8 py-2 z-20 " >
            <p className="font-bold" > Filter : </p>
            <div className="flex gap-5 text-2xl  ">
            {showlinks?   
              <MdClose onClick={toogle} />
             :
             <HiBars4 onClick={toogle} />
            }
             </div>
         </div>

      {/* 2nd Component */}
      <div className={`flex flex-col md:flex-row gap-5 md:gap-0 mt-3 absolute left-[-10000px] transition-all duration-300 bg-white px-16 py-16 z-10 md:z-0 md:static md:justify-between md:px-9 md:py-2 font-santoshi ${showlinks? "left-[0px]  " : ""   }  `} >
        {/* left */}
        <div className="flex flex-col md:flex-row gap-5" >
          <div className="cursor-pointer" >
            <div className="flex gap-[1px] items-center" onClick={() => toggleButton("Category")}>
              Category
              <FaCaretDown className="text-[16px] text-gray-700 " />
            </div>

            {/* Options checkbox */}
            {showOptions.Category && (
              <div className="flex flex-col md:flex-row gap-3  " >
                <label htmlFor="Accessories"  >
                  <input type="Checkbox" id="Accessories" /> <span> Accessories</span>
                </label>

                <label htmlFor="Outdoor furniture">
                  <input type="Checkbox" id="Outdoor furniture" /> <span>Outdoor Furniture</span>
                </label>

                <label htmlFor="Office">
                  <input type="Checkbox" id="Office" /> <span>Office Furniture </span>
                </label>

                <label htmlFor="Home & Kitchen">
                  <input type="Checkbox" id="Home & Kitchen" /> <span>Home & Kitchen </span>
                </label>
              </div>
            )}
          </div>

          {/* 2nd */}
          <div className="cursor-pointer" >
            <div className="flex gap-[1px] items-center" onClick={() => toggleButton("ProductType")}>
              ProductType
              <FaCaretDown className="text-[16px] text-gray-700 " />
            </div>

            {/* Options checkbox */}
            {showOptions.ProductType && (
              <div className="flex flex-col gap-3" >
                <label htmlFor="Seatings">
                  <input type="Checkbox" id="Seatings" /> <span>Seating</span>
                </label>

                <label htmlFor="Storage">
                  <input type="Checkbox" id="Storage" /> <span>Storage</span>
                </label>

                <label htmlFor="Beds">
                  <input type="Checkbox" id="Beds" /> <span>Beds</span>
                </label>
              </div>
            )}
          </div>

          {/* 3rd */}
          <div className="cursor-pointer" >
            <div className="flex gap-[1px] items-center " onClick={() => toggleButton("Price")}>
              Price  <FaCaretDown className="text-[16px] text-gray-700" />
            </div>

            {/* Options checkbox */}
            {showOptions.Price && (
              <div className="flex flex-col gap-3" >
                <label htmlFor="price 100 to 300">
                  <input type="Checkbox" id="price 100 to 300" /> <span>£100 to £300 </span>
                </label>

                <label htmlFor="price 300 to 800">
                  <input type="Checkbox" id="price 300 to 800" /> <span>£300 to £800 </span>
                </label>

                <label htmlFor="price 800 to 5000">
                  <input type="Checkbox" id="price 800 to 5000" /> <span>£800 to £5000 </span>
                </label>
              </div>
            )}
          </div>


          {/* 4th */}


          <div className="cursor-pointer" >
            <div className="flex gap-[1px] items-center " onClick={() => toggleButton("Brand")}>
              Brand
              <FaCaretDown className="text-[16px] text-gray-700 " />
            </div>

            {/* Options checkbox */}
            {showOptions.Brand && (
              <div className="flex flex-col gap-3" >
                <label htmlFor="West Elm">
                  <input type="Checkbox" id="West Elm" /> <span>West Elm</span>
                </label>

                <label htmlFor="Ashley Furniture">
                  <input type="Checkbox" id="Ashley Furniture" /> <span>Ashley Furniture</span>
                </label>

                <label htmlFor="IKEA">
                  <input type="Checkbox" id="IKEA" /> <span>IKEA</span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col md:flex-row  gap-5" >
          <p>Shorting By: </p>

          <div className="cursor-pointer " >
            <div className="flex gap-[1px] items-center " onClick={() => toggleButton("Dateadded")} >
              Date added
              <FaCaretDown className="text-[16px] text-gray-700" />
            </div>
            {showOptions.Dateadded &&
              <div className="flex flex-col gap-5" >
                <label htmlFor="price 1 to 10">
                  <input type="Checkbox" id="price 1 to 10" /> <span>01 to 10 </span>
                </label>

                <label htmlFor="price 11 to 20">
                  <input type="Checkbox" id="price 11 to 20" /> <span>11 to 20 </span>
                </label>

                <label htmlFor="price 21 to 30">
                  <input type="Checkbox" id="price 21 to 30" /> <span>21 to 30 </span>
                </label>
              </div>
            }
          </div>
        </div>

      </div>
     

      {/* Products Listing */}

  
        {/* first line products */}
     
        <div className=" w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-8 font-Clash " >

        {Product.slice(0,12).map((product :any )=>{
          return(
        
          <Link key={product.id} href={`${product.id}`  }>

        <div className='flex flex-col h-96 w-full   bg-gray-100 shadow-sm shadow-black  0 ' >
    

      
          <div className='w-full mx-auto ' >
            <Image className=' w-full object-cover my-1 h-72 ' src={product.image} alt={product.name} width={300} height={150} />
          </div>

          <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
            {product.name}
            <p  > {product.price} </p>
          </div>
          
        </div>
        </Link>
          )
          } )}
        </div>
       
    


      {/* Button */}
      <Link href="/Error" > <div className="flex justify-center my-8 mb-24" >
        <button className="px-3 py-2 border-[1px] border-slate-300 justify-center " > View collection </button>
      </div></Link>

    {/* footer */}
    <Footer />

    </div>

  )
}

export default Page
