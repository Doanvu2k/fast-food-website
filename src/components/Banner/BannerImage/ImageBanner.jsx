import React from 'react'
import Image from './Image'
import ImageItem from './ImageItem'
function ImageBanner() {
    return (
        <div className=" sm:grid grid-cols-1  md:grid grid-cols-1 lg:grid grid-cols-2 gap-x-12 mx-4 p-7  ">
            {Image.map((image)=>(
                <ImageItem key={image.id} image={image}/>
            ))}
        </div>
    )
}

export default ImageBanner
