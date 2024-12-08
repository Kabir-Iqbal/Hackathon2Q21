import { FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest,  FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="bg-[#2A254B] py-3 h-[666px] md:h-[380px]  " >
        <div className="flex  flex-col w-[90%] py-8 h-full justify-between  mx-auto   " >
        <div className="flex justify-between h-full md:flex-row flex-col   " >
          <div className="flex flex-wrap text-white items-start gap-20  md:gap-16  " >
            <div className="text-[16px w-[108px] h-[175px] " >
              Menu
              <ul className=" mt-2 text-[14px] cursor-pointer flex flex-col  " >
                <li> New arrivals </li>
                <li> Best sellers</li>
                <li> Recently viewed </li>
                <li> Popular this week</li>
                <li> All products</li>
              </ul>
            </div>
            <div className="text-[16px]  w-[84px] h-[206px]  "  >
              Categories
              <ul className=" mt-2 cursor-pointer text-[14px] flex flex-col  ">
                <li>Crockery</li>
                <li>Furniture </li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
              </ul>
            </div>
            <div className="text-[16px]  w-[102px] h-[175px]" >
              Our company
              <ul className="mt-2  cursor-pointer text-[14px] flex flex-col ">
                <li>About us</li>
                <li>Vacancies</li>
                <li> Contact us</li>
                <li>Privacy</li>
                <li>Returns policy </li>
              </ul>
            </div>
          </div>

          {/* right side */}
          <div className=" w-[80%] md:w-[50%] flex flex-col h- text-[16px] gap-3  text-white" >
            Join our mailing list
            <div className="flex  " >
              <input className="border-[1px] border-gray-500 w-[70%]  md:w-[350px] px-3 h-[56px] bg-[#2A254B] " type="gmail" placeholder="your@email.com" name="gmail" id="gmail" />
              <div className=" w-[118px] h-[56px] text-black bg-white flex justify-center items-center  " >
                <button className="" > Sign up</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" text-white " >
          <div className="bg-[#4E4D93] h-[1px] w-full my-1 " ></div>
          <div className='flex justify-between my-1 ' >
            <div className='text-sm text-center md:text-start' >Copyright 2022 Avion LTD</div>
            <div className="md:flex text-xl gap-2 cursor-pointer hidden  " >
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            <FaSkype />
            <FaTwitter />
            <FaPinterest />
            </div>
          </div>
        </div>

      </div>  
      </div>
    </>
  )
}

export default Footer
