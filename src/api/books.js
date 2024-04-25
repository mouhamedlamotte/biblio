const { axiosInstance } = require("./base");

export const getCategories = async () => {
    try {
        const response = await axiosInstance.get("categories")
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const getBooks = async (limit = null, categori_id = null) => {
    try {
        const response = await axiosInstance.get(`books${limit != null ? `?limit=${limit}` : ""}${categori_id != null ? `&categori_id=${categori_id}` : ""}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const filterBooksCategory = async (category_id, limit=null) => {
    try {
        const response = await axiosInstance.get(`books/filter?category_id=${category_id}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const getFavoriteBooks = async (uid) => {
    try {
        const response = await axiosInstance.get(`users/${uid}/favorites`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const SearchBooks = async (query, category=null) => {
    try {
        const response = await axiosInstance.get(`books/search?q=${query}${category ? `&category=${category}` : ""}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}