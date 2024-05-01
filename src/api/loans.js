import { axiosInstance } from "./base";


export const getLoans = async (limit=null) => {
    try {
        const response = await axiosInstance.get(`/loans${ limit != null ? `?limit=${limit}` : ""}`)
        return response.data
    } 
    catch (error){
        // console.log("Une erreur s'est produite : ", error);
    }
}


export const getUserLoans = async (uid, status=null) => {
    try {
        if (!uid) return
        const response = await axiosInstance.get(`/loans/user/${uid}${ status != null ? `?status=${status}` : ""}`)
        return response.data
    } 
    catch (error){
        // console.log("Une erreur s'est produite : ", error);
    }
}


export const makeLoan = async (loan, uid) => {
    try {
        if (!uid) return
        const response = await axiosInstance.post("/loans/add", JSON.stringify(loan))
        return response.data
    } 
    catch (error){
        // console.log("Une erreur s'est produite : ", error);
    }
}

export const manageLoans = async (loan_id, action) => {
    try {
        const response = await axiosInstance.post(`/loans/${loan_id}/manage?action=${action}`)
        return response.data
    } 
    catch (error){
        // console.log("Une erreur s'est produite : ", error);
    }
}