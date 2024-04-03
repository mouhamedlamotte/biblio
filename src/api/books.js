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


export const getBooks = async () => {
    try {
        const response = await axiosInstance.get("books")
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const filterBooksCategory = async (category_id) => {
    try {
        const response = await axiosInstance.get(`books/filter?category_id=${category_id}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}