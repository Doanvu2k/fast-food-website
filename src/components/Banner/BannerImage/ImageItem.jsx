import React from 'react'

function ImageItem({image}) {
    return (
        <div className="justify-center ">
            <img src={image.img} alt=""/>
        </div>
    )
}

export default ImageItem
