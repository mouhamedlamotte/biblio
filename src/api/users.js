import { axiosInstance } from "./base";

export const get_user_notifications = async (uid) => {
    try {
        const response = await axiosInstance.get(`users/${uid}/notifications`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}

export const delete_user_notification = async (uid, notification_id) => {
    try {
        const response = await axiosInstance.delete(`users/${uid}/notification/${notification_id}`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}

export const delete_all_user_notifications = async (uid) => {
    try {
        const response = await axiosInstance.delete(`users/${uid}/notifications`)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}