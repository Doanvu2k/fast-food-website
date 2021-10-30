import React from 'react'
import products from './products'
import ProductItem from './ProductItem'
function ProductCard() {
    return (
        <div className="flex flex-wrap  py-16 items-center justify-center bg-gray-300 ">
            {products.map((product)=>(<ProductItem 
            key={product.id} product={product}/>))}
        </div>
    );
}

export default ProductCard
