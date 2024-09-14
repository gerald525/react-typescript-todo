import React, { createContext, useContext, useEffect, useState } from 'react';
import HttpRequest from '../services/api';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const api = new HttpRequest();

interface AuthContextData {
 signed: boolean;
 Login(email: string, password: string): Promise<void>;
 useAuth(): AuthContextData;
 token: string | null;
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider = ({children}: any) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storagedRefreshToken = localStorage.getItem('@App:refreshToken');
        const storagedToken = localStorage.getItem('@App:token');
        if (storagedToken && storagedRefreshToken) {
            setToken(storagedToken);
            api.setHeaders(token as string);
        }
    }, []);

    function Logout() {
        sessionStorage.removeItem('@App:refreshToken');
        sessionStorage.removeItem('App:token');
        setToken(null);
    }

    async function Login(email: string, password: string) {
        try{
            const response = await api.postRequest('/login', {email, password});
            const {token, refreshToken}: any = response.data;
            api.setHeaders(token);
            setToken(token);
            localStorage.setItem('@App:refreshToken', refreshToken);
            localStorage.setItem('@App:token', token);
        }catch(err){
            throw err;
        }
    }

    return (
    <AuthContext.Provider value={{ signed: !!token , Login, useAuth, token}}>
        {children}
    </AuthContext.Provider>
    );

}