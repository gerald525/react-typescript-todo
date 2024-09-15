import { createContext, useContext, useState } from 'react';
import HttpRequest from '../services/api';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const api = new HttpRequest();

interface AuthContextData {
 signed: boolean;
 Login(email: string, password: string): Promise<void>;
 Logout(): void;
 useAuth(): AuthContextData;
 token: string | null;
 member: any;
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider = ({children}: any) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('@App:token'));
    const [member, setMember] = useState<string | null>(JSON.parse(localStorage.getItem('@App:member') as string));

    function Logout() {
        localStorage.removeItem('@App:member');
        localStorage.removeItem('@App:token');
        setToken(null);
        setMember(null);
    }

    async function Login(email: string, password: string) {
        try{
            const response = await api.postRequest('/login', {email, password});
            const {token, member}: any = response.data;
            api.setHeaders(token);
            localStorage.setItem('@App:member', JSON.stringify(member));
            localStorage.setItem('@App:token', token);
            setMember(member);
            setToken(token);
        }catch(err){
            throw err;
        }
    }

    return (
    <AuthContext.Provider value={{ signed: !!token, Logout, Login, useAuth, token, member}}>
        {children}
    </AuthContext.Provider>
    );

}