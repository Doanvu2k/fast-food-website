import React from 'react'

function BlogItem({blog}) {
    return (
        <div className="grid-cols-1 w-3/12 mx-16  border-dotted border border-black">
            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden relative group rounded-md">
               <img className="transform hover:scale-105 transition-transform duration-1000"  src={blog.image} alt="#"/>
                
            </div>
            <div className="py-5 px-5">
                <div className="hover:text-yellow-400 text-2xl">{blog.title}</div>
                <div className="w-full">{blog.content}</div>
                <button className="bg-black text-xl hover:bg-yellow-400 w-100 h-19 text-white flex items-center justify-center rounded-full ">READ MORE</button>
            </div>
        </div>
    )
}

export default BlogItem
