import React from 'react'
import blogs from './Blogs'
import BlogItem from './BlogItem'
function BlogCart() {
    return (
        <div >
            <div className="sm:grid grid-cols-1  md:grid grid-cols-2  gap-4 lg:grid-cols-3  ">
                {blogs.map((blog)=>(
                    <BlogItem key={blog.id} blog={blog}/>
                ))}
            </div>
        </div>
    );
}

export default BlogCart
