import { axiosInstance } from "./base";

export const getUserLoans = async (uid, status=null) => {
    console.log(uid, status);
    try {
        if (!uid) return
        const response = await axiosInstance.get(`/loans/user/${uid}${ status != null ? `?status=${status}` : ""}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}