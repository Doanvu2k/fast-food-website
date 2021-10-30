import React from 'react'
import products from './products'
import ProductItem from './ProductItem'
function ProductCard() {
    return (
        <div className="bg-gray-300 sm:grid grid-cols-1  md:grid grid-cols-2  lg:grid-cols-3 px-20 py-16">
            {products.map((product)=>(
            <ProductItem key={product.id} product={product}/>))}
        </div>
    );
}

export default ProductCard
