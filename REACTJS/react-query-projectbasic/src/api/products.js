import axios from "axios";

// Get ALL products from API
export const getAllProducts = async () => {
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        return data;
    } catch (error) {
        throw Error("Thất bại khi lấy dữ liệu...")
    }
}

//Get product from API
export const productDetail = async (id) => {
    try {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return data
    } catch (error) {
        throw Error("Thất bại khi lấy dữ liệu...")
    }
}

// Create product with method POST to API
export const createProduct = async (pro) => {
    try {
        return axios.post('https://fakestoreapi.com/products', pro)
    } catch (error) {
        throw Error("Thất bại khi lấy dữ liệu...")
    }
}

export const removeProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`,{
        method:"DELETE"
    })
    if (!res.ok) {
        throw new Error(res.json().message)
    }
    return res.json()
}

