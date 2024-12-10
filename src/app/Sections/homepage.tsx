import Header from "../components/header"
import Image from "next/image"
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiFlowerTulipLight } from "react-icons/pi";
import Footer from "../components/footer";


function Hero() {
    return (
        <div>
            {/*Header  */}
            <Header />

            {/* hero-1 */}
            <div className=" flex flex-col gap-10  w-[100%] md:w-[90%] mx-auto " >
                <div className="flex flex-col md:flex-row  text-white h-[502px] md:h-[480px]  ">
                    {/* left-section */}
                    <div className=" flex flex-col gap-10 md:gap-4 px-6 md:px-11 py-4 md:py-7 bg-[#2A254B] h-full w-full md:w-[60%] " >
                       <div className=" " >
                        <p className=" font-Clash  mt-16 text-[32px] md:text-2xl w-[80%] text-center   md:text-start md:w-[60%]" >
                            The furniture brand for the future, with timeless designs</p>
                        </div> 

                        <button className=" hidden md:block  px-3 w-[150px] py-2 text-sm bg-[#F9F9F926] ">View collection</button>


                        <p className=" font-sans text-center md:text-start md:w-[90%] mt-16 md:mt-28 text-sm text-[#FFFFFF] h-[81px] " >
                            A new era in eco friendly furniture with Avelon, the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally
                            using modern web technologies.
                        </p>
                     
                     <div className="flex w-[80%] mt-20 justify-center mx-auto sm:w-[150px] " >   
                        <button className=" md:hidden block w-full  px-3 sm:w-[150px] py-2 text-sm bg-[#F9F9F926] ">View collection</button>
                      </div>
                    </div>

                    {/* right section */}
                    <div className=" hidden md:block h-full w-[40%] relative" >
                        <Image className="object-cover " fill src="/images/Right Image.png" alt="chairpic" />
                    </div>
                </div>

                 {/* Cards  */}
            <div className="w-[97%] mx-auto mt-20 " >
                <p className="font-Clash text-center text-[24px] " >What makes our brand different</p>
             <div className="flex  flex-wrap   justify-center gap-7 my-10 px-2 md:px-0  " >
                <div className=" md:w-1/5 h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 " > 
                         <TbTruckDelivery className="mb-2 text-2xl " />
                         <br/>
                         <p className="font-Clash " >Next day as standard  </p>
                         <p className="text-sm mt-2 font-santoshi "> Order before 3pm and get your order the next day as standard</p>
                     </div>
                <div className=" md:w-1/5  h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 "  >
                         <MdOutlineCheckCircle className="mb-2 text-2xl" />
                         <br/>
                         <p className="font-Clash " >Made by true artisans </p>
                         <p className="text-sm mt-2 font-santoshi " >  Handmade crafted goods made with
                             real passion and craftmanship</p>
                </div>
                <div className=" md:w-1/5 h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 "  >
                         <FaRegCreditCard className="mb-2 text-2xl " />
                         <br/>
                         <p className="font-Clash " >Unbeatable prices </p>
                         <p className="text-sm mt-1 font-santoshi "> For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className=" md:w-1/5 h-[244px] bg-[#F9F9F9] flex flex-col justify-center text-xl px-4 "  >
                         <PiFlowerTulipLight className="mb-2 text-2xl " />
                         <br/>
                         <p className="font-Clash " >Recycled packaging </p>
                         <p className="text-sm mt-1 font-santoshi ">  We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
             </div>
            </div>

                {/* HeroCards */}
                <div className=" my-10 mt-16 w-[90%] md:w-full mx-auto md:h-full  " >
                    <p className="text-2xl font-semibold text-[#2A254B] " >New ceramics</p>
                    {/* CardBox */}
                    <div className="flex text-center flex-wrap gap-6 my-6 justify-center " >
                        <div className='flex flex-col h-96 w-[45%] md:w-[30%] lg:w-[23%]  bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='w-full mx-auto ' >
                                <Image className=' w-full object-cover my-1 h-72 ' src="/images/Right Image.png" alt="The Dandy chair" width={300} height={300} />
                            </div>

                            <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
                                The Dandy chair
                                <p  > £250 </p>
                            </div>
                        </div>

                        <div className='flex flex-col h-96 w-[45%] md:w-[30%] lg:w-[23%]   bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='w-full mx-auto ' >
                                <Image className=' w-full object-cover my-1 h-72 ' src="/images/Photo.png" alt="The Dandy chair" width={300} height={300} />
                            </div>

                            <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
                                Rustic Vase Set
                                <p  > £155 </p>
                            </div>
                        </div>


                        <div className='flex flex-col h-96 w-[45%] md:w-[30%] lg:w-[23%]   bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='w-full mx-auto ' >
                                <Image className=' w-full object-cover my-1 h-72 ' src="/images/botel.png" alt="The Dandy chair" width={300} height={300} />
                            </div>

                            <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-3 px-1 ' >
                                The Silky Vase
                                <p  > £125 </p>
                            </div>
                        </div>

                        <div className='flex flex-col h-96 w-[45%] md:w-[30%] lg:w-[23%]   bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='w-full mx-auto ' >
                                <Image className=' w-full object-cover my-1 h-72 ' src="/images/Photo (1).png" alt="The Dandy chair" width={300} height={300} />
                            </div>

                            <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
                                The Lucy Lamp
                                <p  > £399 </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-8" >
                        <button className="px-3 py-2 border-[1px] border-slate-300 justify-center " > View collection </button>
                    </div>
                </div>



                {/* HeroCards2 */}
                <div className=" my-10 mt-16 w-[90%] mx-auto md:w-full   " >
                    <p className="text-2xl font-semibold text-[#2A254B] " >New ceramics</p>
                    {/* CardBox */}
                    <div className="flex gap-5 my-6   " >
                        <div className=' hidden md:flex md:static  flex-col h-96 w-[50%]  bg-gray-100 shadow-sm shadow-black  0 ' >
                            <div className='w-full mx-auto ' >
                                <Image className=' w-full object-cover my-1 h-72 ' src="/images/big image.jpg" alt="The Dandy chair" width={300} height={300} />
                            </div>

                            <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
                                The Poplar suede sofa
                                <p  > £950 </p>
                            </div>
                        </div>


                        <div className="flex gap-5 w-[100%] md:w-[50%] " >
                            <div className='flex flex-col h-96 w-[50%]   bg-gray-100 shadow-sm shadow-black  0 ' >
                                <div className='w-full mx-auto ' >
                                    <Image className=' w-full object-cover my-1 h-72 ' src="/images/photo.png" alt="The Dandy chair" width={300} height={300} />
                                </div>

                                <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
                                    Rustic Vase Set
                                    <p  > £155 </p>
                                </div>
                            </div>


                            <div className='flex flex-col h-96 w-[50%]   bg-gray-100 shadow-sm shadow-black  0 ' >
                                <div className='w-full mx-auto ' >
                                    <Image className=' w-full object-cover my-1 h-72 ' src="/images/chair (1).png" alt="The Dandy chair" width={300} height={300} />
                                </div>

                                <div className='text-sm gap-1 text-[#2A254B] flex flex-col my-2 px-1 ' >
                                    The Dandy chair
                                    <p  > £250 </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center my-8" >
                        <button className="px-3 py-2 border-[1px] border-slate-300 justify-center " > View collection </button>
                    </div>
                </div>


            </div>
            {/* Joining Section */}
            <div className=" bg-[#F9F9F9] flex items-center h-[481px] " >
                <div className=" md:bg-white w-[90%] gap-5 mx-auto items-center flex flex-col justify-center  h-[364px] my-10 md:border-[1px] md:border-gray-300  " >
                    <div className=" text-center mb-8 text-2xl text-[#2A254B] flex flex-col gap-5 md:w-[400px] h-[114px] mx-auto  " >
                        Join the club and get the benefits
                        <p className="text-[14px] " >
                            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                        </p>
                    </div>
                    <div className="flex w-full justify-center mt-8 my-2  h-[56px] " >
                        <input type="email" placeholder="your@email.com" id="email" name="email" className=" w-[70%] h-[56px] md:w-[300px] px-2 " />
                        <button className="bg-[#2A254B] px-3 w-[30%] md:w-[118px] h-[56px]   text-sm text-white " > Sign Up </button>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className=" h-[828px] md:h-[603px] flex flex-col md:flex-row " >

                {/* left */}
                <div className=" bg-[#FFFFFF]   oredr-1 h-3/5  md:h-full w-[90%] md:w-[50%] " >
                    <div className=" w-[80%] mx-auto flex-col flex h-full justify-between  py-8 md:py-14  " >
                        <div className=" text-[20px] md:text-[24px] text-[#2A254B] h-[84px] md:h-[255px] items-center " >
                            From a studio in London to a global brand with
                            over 400 outlets
                            <br /> <br />
                            <p className="  text-[14px] md:text-[16px] text-[#505977] " >When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                                <br /> <br />
                                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>

                        <div className=" bg-[#F9F9F9] w-full sm:w-[150px] h-[56px] items-center justify-center flex " >
                            <button className="  px-2 py-1 " >Get in touch</button>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className=" w-[100%] md:w-[50%] h-2/5   md:h-full  " >
                    <Image className=" w-full object-cover h-full "
                        src="/images/Image.png" width={400} height={500} alt="Imagge" />
                </div>
            </div>

         {/* Footer */}
         <Footer />
            

        </div>
    )
}

export default Hero
