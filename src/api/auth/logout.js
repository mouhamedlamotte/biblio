import { useRouter } from 'next/navigation';
import React from 'react'
import { Cookies } from 'react-cookie';

export const Logout = () => {
    const cookies = new Cookies();
    const router = useRouter()

    cookies.remove('access_token', { path: '/' });
    router.refresh()
    return true
}
