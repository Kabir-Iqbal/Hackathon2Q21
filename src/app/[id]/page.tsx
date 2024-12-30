"use client"
import Header from "../components/header"
import Footer from "../components/footer";

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiFlowerTulipLight } from "react-icons/pi";

// Dispatch is used for add to product to store through  the reducer
import { useAppDispatch } from "../lib/store/hooks";
import { add } from "../lib/store/feature/cart/cartSlice";


// Data of All products
import { Product } from "../Data/product"


const Page = (props: any) => {

    const id = props.params.id
    const product = Product.find((i) => i.id === parseInt(id as string))

    // inecrement , deccrement buttons
    const [number, SetNumber] = useState(1)

    const increment = () => {
        SetNumber(number + 1)
    }

    const decrement = () => {
        if (number > 1) {
            SetNumber(number - 1)
        }
    }

   const amount = product?.price * number
   
    if (!product) {
        return (
            <h1>Page not Found</h1>
        )
    }
 
    
    const dispatch = useAppDispatch()

    // // dispatch amount and quantity
    //   dispatch(add(amount , number ))

    
   const AddToCart =(productId :number )=>{
        console.log(productId);

        dispatch(add({id: productId , quantity: number} ))
    
   }

    return (
        <>
            <div className=" max-w-[1440px] mx-auto w-[100%] " >
                {/* Header */}
                <Header />
                <div className=" pt-[132px] w-[90%] mx-auto " >
                    {/* Product Details */}
                    <div className=" flex flex-col md:flex-row my-10 gap-0 md:gap-10 h-[1070px]  md:h-[600px] " >
                        {/* Right */}
                        <div className="flex-1 h-[400px]  md:h-[600px]  " >
                            <Image className="w-full h-full " src={product.image} width={400} height={400} alt={product.name} />
                        </div>
                        {/* left */}
                        <div className="flex-1 flex flex-col gap-2 my-10 ">
                            <h1 className="font-bold " > {product.name} </h1>
                            <p>{`\u00A3 ${product.price}`} </p>
                            <div className="text-[#505977] flex flex-col gap-3   " >
                                <p >Description</p>
                                <p>A timeless design, with premium materials features as one of our most popular and iconic pieces.
                                    The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>

                                <ul className="list-disc px-4 space-y-3 py-3 " >
                                    <li>Premium material</li>
                                    <li>Handmade upholstery</li>
                                    <li>Quality timeless classic</li>
                                </ul>

                                <div className="flex gap-12  mt-5 " >
                                    <div className="space-y-2 " >
                                        <p> Height </p>
                                        <p>110cm</p>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p> Width </p>
                                        <p>75cm</p>
                                    </div>
                                    <div className="space-y-2 ">
                                        <p> Depth </p>
                                        <p>50cm</p>
                                    </div>

                                </div>

                                <div className=" flex justify-between  " >
                                    {/* right */}
                                    <div className="flex flex-col px-2 sm:px-5 sm:flex-row gap-5 mt-10 items-center">
                                        <h2 className="text-18px  " > Amount: <span className="ml-2 " > {`\u00A3 ${amount}`} </span>  </h2>
                                        <div className="flex gap-5 px-3 py-2 bg-gray-200 " >
                                            <button onClick={decrement} > -  </button>
                                            <h2>{number} </h2>
                                            <button onClick={increment} className="text-red-700" > + </button>
                                        </div>
                                    </div>
                                    {/* left */}
                                    <div className=" cursor-pointer w-[150px] mt-20   sm:justify-center sm:mt-12  text-white font-semibold  flex items-center " >
                                        <button  onClick={() => AddToCart(product.id)} type="button" className=" px-3 sm:px-5 py-2 bg-[#2a254b] items-center " >Add To Cart</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Suggest products */}
                    <div>
                        <h1 className="font-Clash lg:text-[32px] mt-28 " >You might also love these</h1>
                        <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-5 font-Clash " >

                            {Product.slice(0, 4).map((product: any) => {
                                return (

                                    <Link key={product.id} href={`${product.id}`}>

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
                            })}
                        </div>

                        {/* Button */}
                        <Link href="/Error" > <div className="flex justify-center my-10 mb-24" >
                            <button className="px-3 py-2 border-[1px] border-slate-300 justify-center " > View collection </button>
                        </div></Link>
                    </div>

                    {/* Cards  */}
                    <div className=" mt-20 " >
                        <p className="font-Clash text-center text-[24px] w-[97%] mx-auto " >What makes our brand different</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4     justify-center gap-7 my-10 px-2 md:px-0  " >
                            <div className="  h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 " >
                                <TbTruckDelivery className="mb-2 text-2xl " />
                                <br />
                                <p className="font-Clash " >Next day as standard  </p>
                                <p className="text-sm mt-2 font-santoshi "> Order before 3pm and get your order the next day as standard</p>
                            </div>
                            <div className=" h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 "  >
                                <MdOutlineCheckCircle className="mb-2 text-2xl" />
                                <br />
                                <p className="font-Clash " >Made by true artisans </p>
                                <p className="text-sm mt-2 font-santoshi " >  Handmade crafted goods made with
                                    real passion and craftmanship</p>
                            </div>
                            <div className=" h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 "  >
                                <FaRegCreditCard className="mb-2 text-2xl " />
                                <br />
                                <p className="font-Clash " >Unbeatable prices </p>
                                <p className="text-sm mt-1 font-santoshi "> For our materials and quality you won’t find better prices anywhere</p>
                            </div>
                            <div className=" h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 "  >
                                <PiFlowerTulipLight className="mb-2 text-2xl " />
                                <br />
                                <p className="font-Clash " >Recycled packaging </p>
                                <p className="text-sm mt-1 font-santoshi ">  We use 100% recycled packaging to ensure our footprint is manageable</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* footer */}
                <Footer />
            </div>
        </>
    )
}

export default Page







