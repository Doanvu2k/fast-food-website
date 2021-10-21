import axiosClinet from "./axiosClient";
// get tat ca blog
export const getAllBlog = (params) => {
    const url = '/blogs';
    return axiosClinet.get(url, {params})
} 
// lay 1 bai viet theo slug
export const getBlogBySlug = (slug) => {
    const url = `/blogs/${slug}`
    return axiosClinet.get(url)
}
// lay 1 bai viet theo id

export const getBlogById = (id) => {
    const url = `/blogs/${id}`
    return axiosClinet.get(url)
}

// lay cac bai viet theo category
export const getBlogsByCategory = (idCategory) => {
    const url = '/blogs'
    return axiosClinet.get(url, { category : idCategory })
}