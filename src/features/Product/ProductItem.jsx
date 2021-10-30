import React from 'react'

function ProductItem({product}) {
    return (
        
        <div className="grid-cols-1 mx-16 bg-white ">
        <div className="w-auto  ">
            

            <div className="w-auto  aspect-w-1 aspect-h-1 overflow-hidden relative group ">
            <img src={product.image} alt="" className="absolute w-48 h-48 transform group-hover:scale-105 transition-transform duration-1000" />
            <div className="auto  absolute  opacity-0 group-hover:opacity-100 flex transition-all duration-500 flex-wrap items-center justify-center bg-gray-500 bg-opacity-40">
                <div className="text-center">
                
                <button className="bg-red-400 hover:bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full" ><i class="fas fa-eye"/></button>
                
                </div>
                
            </div>
            <button className="bg-yellow-400  top-0 right-0 hover:bg-red-400 w-10 h-10 flex items-center justify-center rounded-full " ><i class="fas fa-cart-plus"/></button>
            
        </div>
        </div>
            <div>
            <p className="w-48 text-center hover:text-yellow-400 text-xl ">{product.title}</p>
                <p className="w-48 text-center ">${product.price}</p>
            </div>
        
        </div>






    )
}

export default ProductItem
