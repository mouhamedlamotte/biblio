import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { axiosInstance } from "./base";
import { storage } from "./firebase/config";

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

export const uploadAvatar = async (uid, avatar) => {
    try {
        const avatarRef = ref(storage, `avatar/${uid}/${avatar.name}`);
        const response = await uploadBytes(avatarRef, avatar)
        if (response){
            const url = await getDownloadURL(avatarRef)
            return url
        }
    }
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}

export const updateUser = async (uid, user) => {
    try {
        const response = await axiosInstance.put(`users/update/${uid}`, user)
        console.log(response.data);
        return response.data

    }
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}
    



