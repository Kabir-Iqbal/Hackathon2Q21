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

  return (
    <>
      <div className=" max-w-[1440px] mx-auto w-[100%] " ></div>
      {/* Header */}
      <Header />

      {/* Cart data */}
      <div className="min-h-[749px] bg-[#F9F9F9] " >
        <div className=" w-[80%] h-full mx-auto pt-[200px] " >
          <h1 className=" text-[36px] leading-[50.4px] font-Clash  " >Your shopping cart</h1>
          <div className="text-[20px] w-[92%] flex justify-between font-Clash text-[#2A254B] mt-[20px] " >
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
                <div key={product.id} className="flex my-4 " >
                  <hr className="text-[#EBE8F4] my-5 " />
                  <div className="h-[134px] grid grid-cols-4 w-full gap-1" >

                    <div className="h-[134px] col-span-2 w-full flex gap-2  " >
                      <Image className="h-full w-[190px] " src={product.image} alt={product.name} width={200} height={300} />

                      <div className="my-5 flex flex-col justify-between text-[#2A254B] " >
                        <h2 className="text-[20px] leading-[28pxx] font-Clash " >{product.name} </h2>
                        <h3 className="text-[16px] leading-[24px] " > {`\u00A3${product.price}`}</h3>
                      </div>
                    </div>

                    
                      <h1 className=" mt-5 " >{quantity2} </h1>
                    

          
                      <h1 className=" text-end mt-5" > {`\u00A3 ${total} `} </h1>
                    

                  </div>


                
                  <p>  <button className="ml-5 mt-5 bg-red-700 text-white px-2 py-[2px] rounded-lg  " onClick={() => HandletoRemove(product.id)} > Delete </button> </p>

                </div>

              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Cart
