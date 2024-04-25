import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Cookies } from 'react-cookie';
import { getUser } from '@/api/base';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const cookies = new Cookies();
    const router = useRouter()

    const get_user_tokken = () => {
        const access_token = cookies.get('access_token') || null;
        return access_token
    }

    const get_user_id = () => {
        const access_token = get_user_tokken();
        if (access_token) {
            const decoded_token = jwtDecode(access_token);
            const sub = decoded_token.sub
            const user_id = sub?.user_id
            return user_id
        }
    }

    const get_user = () => {
        const access_token = get_user_tokken();
        if (access_token) {
            const decoded_token = jwtDecode(access_token);
            const sub = decoded_token.sub
            console.log(sub);
            const user = sub?.user
            console.log(user);
            setUser(user)
        }
    }
   


    


    useEffect(() => {
        get_user()
    }, [router]);

    return (
        <AuthContext.Provider value={{ user }}>
          {children}
        </AuthContext.Provider>
      );
}