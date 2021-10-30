import React from 'react'
import blogs from './Blogs'
import BlogItem from './BlogItem'
function BlogCart() {
    return (
        <div>
            <div className=" grid gap-4 grid-cols-3   ">
                {blogs.map((blog)=>(
                    <BlogItem key={blog.id} blog={blog}/>
                ))}
            </div>
        </div>
    );
}

export default BlogCart
