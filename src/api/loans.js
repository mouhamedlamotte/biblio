import { axiosInstance } from "./base";

export const getUserLoans = async (uid, status=null) => {
    try {
        if (!uid) return
        const response = await axiosInstance.get(`/loans/user/${uid}${ status != null ? `?status=${status}` : ""}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const makeLoan = async (loan, uid) => {
    try {
        if (!uid) return
        const response = await axiosInstance.post("/loans/add", JSON.stringify(loan))
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}