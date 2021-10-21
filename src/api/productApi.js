import axiosClinet from "./axiosClient";
// get tat ca product
export const getAllProduct = (params) => {
    const url = '/sanphams';
    return axiosClinet.get(url, {params})
} 
// lay 1 bai viet theo slug
export const getBlogBySlug = (slug) => {
    const url = `/sanphams/${slug}`
    return axiosClinet.get(url)
}
// lay 1 bai viet theo id

export const getBlogById = (id) => {
    const url = `/sanphams/${id}`
    return axiosClinet.get(url)
}

// lay cac bai viet theo category
export const getBlogsByCategory = (idCategory) => {
    const url = '/sanphams'
    return axiosClinet.get(url, { category : idCategory })
}