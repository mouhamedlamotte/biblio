import axios from 'axios';
import { Cookies } from 'react-cookie';

export const axiosInstance = axios.create({
  baseURL: 'https://frequent-garland-mbllm.koyeb.app/',
//   baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json",
    "api-key": "fc5ffca1fa884554acaa0a597569312b"
  },
});



export const registerUser = async (data) =>{

    const user = {
        username : data.username,
        password : data.password,
        email : data.email,
        fisrt_name: null,
        last_name: null,
        is_staff: false,
        is_superuser: false,
        avatar_url: null
    }

    try {
        const response = await axiosInstance.post("users/add", user)
        return response.data
    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const LoginUser = async (user) =>{
    const cookies = new Cookies();
    try{
        const response =  await axiosInstance.post("auth/login", user)
        if (response.data.success == 1 ){
            cookies.set('access_token', response.data.access_token, { path: '/' });
            return response.data
        }

    } 
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}


export const getUser = async (uid) =>{
    try {
        const response =  await axiosInstance.get(`users/${uid}`)
        if (response){
            const user = response.data
            return user
        }
    }
    catch (error){
        console.log("Une erreur s'est produite : ", error);
    }
}



