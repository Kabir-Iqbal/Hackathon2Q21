"use client"

import { Product } from "../Data/product";

import { useAppSelector } from "../lib/store/hooks";
import { remove } from "../lib/store/feature/cart/cartSlice";
import { useAppDispatch } from "../lib/store/hooks";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";




function Cart() {


  const product = Product.map((items) => items)
  const data = useAppSelector(state => state.cart.item)

  // const amount = useAppSelector(amount => amount.cart.amount )
  // const quantity = useAppSelector(quantity => quantity.cart.quantity )

  const dataofProductID = data.map((productdata) => productdata.id)
  const ProductQuantity: number[] = data.map((quantity) => quantity.quantity)


  const filteredProducts = Product.filter((product) => dataofProductID.includes(product.id))





  const dispatch = useAppDispatch()

  const HandletoRemove = (productId: number) => {
    dispatch(remove(productId))
  }

  // Total amount
  const totalAmount = filteredProducts.reduce((sum, product, index) => {
    const quantity = ProductQuantity[index];
    return (sum + product.price * quantity)

  }, 0)

  return (
    <>
      <div className=" max-w-[1440px] mx-auto w-[100%] " >
        {/* Header */}
        <Header />

        {/* Cart data */}
        <div className="min-h-[749px] bg-[#F9F9F9] " >
          <div className=" w-[90%] md:w-[85%] h-full mx-auto pt-[200px] " >
            <h1 className=" text-[36px] leading-[50.4px] font-Clash  " >Your shopping cart</h1>
            <div className=" hidden text-[18px] md:text-[20px] w-[85%] md:w-[90%] lg:w-[92%] md:flex justify-between font-Clash text-[#2A254B] mt-[20px] " >
              <p>Product</p>
              <p >Quantity</p>
              <p>Total</p>
            </div>
            {/* <h1>
               ProductId == {filteredProducts.length}
           </h1> */}
            <div>
              {filteredProducts.map((product, index) => {

                const quantity2 = ProductQuantity[index]
                const total = product.price * quantity2



                return (
                  <div key={product.id} className="flex mt-8 mb-24 md:my-5 " >
                    <hr className="text-[#EBE8F4] my-5 " />
                    <div className=" h-[60px] md:h-[134px] grid grid-cols-5  md:grid-cols-4 w-full gap-14 md:gap-1" >

                      <div className=" h-[100px] md:h-[134px] col-span-3 md:col-span-2 w-full flex gap-2  " >
                        <Image className="h-full w-[100px] md:[150px] lg:w-[190px] " src={product.image} alt={product.name} width={200} height={300} />

                        <div className="my-5 flex flex-col justify-between text-[#2A254B] " >
                          <h2 className=" text-[14px] md:[18px] lg:text-[20px] leading-[28pxx] font-Clash " >{product.name} </h2>
                          <h3 className="text-[16px] leading-[24px] " > {`\u00A3${product.price}`}</h3>
                        </div>
                      </div>

                      <div className="flex h-full flex-col justify-end md:justify-start text-start    " >
                        <h1 className="  md:mt-5   " >{quantity2} </h1>
                      </div>


                      <h1 className="hidden md:static md:block text-end mt-5" > {`\u00A3 ${total} `} </h1>


                    </div>

                    <p>  <button className="ml-5 mt-5 bg-red-700 text-white px-2 py-[2px] rounded-lg  " onClick={() => HandletoRemove(product.id)} > Delete </button> </p>

                  </div>

                )
              })}

              <div className="my-9" >
                <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-0  " >
                  <p className="order-2 md:order-1 text-[#2A254B] text-sm sm:text-[14px] text-end md:text-start " >Taxes and shipping are calculated at checkout</p>

                  <div className="order-1 md:order-2" >
                    <p className=" text-end md:text-start text-[20px] text-[#4E4D93] mx-5 " >Subtotal <span className=" mr-1 text-[24px] " >  {`\u00A3${totalAmount}`}</span> </p>
                  </div>

                </div>
                <p className="text-end w-full " > <button className="bg-[#2A254B] w-full sm:w-[172px] my-4 px-7 py-3 md:my-2 mb-8   text-white " >Go to checkout </button> </p>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Cart
