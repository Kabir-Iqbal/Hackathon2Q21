import Footer from "../components/footer"
import Header from "../components/header"


function Page() {
  return (
    <div className="w-[100%] max-w-[1440px] mx-auto ">
        {/* Header */}
        <Header />

        <div>
        <h1  className=" pt-[132px] text-2xl font-semibold font-Clash text-center mt-20">Contact Form: </h1>
            <div className=" w-[90%] sm:w-[75%] md:w-[70%] lg:w-[50%] mx-auto my-[60px] border-gray-200 rounded-sm shadow-sm shadow-gray-600 px-3 sm:px-20 py-16 "  >
               
                <form action="post" className="flex flex-col w-[90%]  md:w-[80%] mx-auto gap-2  " >
                    <label htmlFor="Name" className="border-gray-200" >
                      <p className="font-Clash" >Name:</p>
                        <input type="text" id="Name" placeholder="name" className="font-santoshi w-full border border-gray-300 rounded-md px-2 py-1" />
                    </label>
                    <label htmlFor="Address">
                        <p className="font-Clash" >Name:</p>
                        <input type="text" id="Address" placeholder="address" className="font-santoshi w-full border border-gray-300 rounded-md px-2 py-1" />
                    </label>
                    <label htmlFor="Email">
                        <p className="font-Clash">Name:</p>
                        <input type="email" id="Email" placeholder="emal" className="font-santoshi w-full border border-gray-300 rounded-md px-2 py-1 " />
                    </label>

                    <button type="submit" className="font-santoshi border-gray-300 border-[1px] hover:border-gray-700 rounded-sm shadow-sm mt-10 px-3 py-2 " > Submit</button>
                </form>
            </div>
        </div>
   

    <Footer />
    </div>
  )
}

export default Page
