import React, { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

interface AuthState {
    auth: boolean;
}

type AuthAction = { type: "login" } | { type: "logout" };

interface AuthContextType {
    auth: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("error: useAuth must be inside AuthProvider");
    }
    return context;
}

const initialState: AuthState = { auth: false };

const authReducer = (state, action) => {
    if (action.type === 'login') {
        return { ...state, auth: true };
    } else if (action.type === 'logout') {
        return { ...state, auth: false };
    } else {
        return state;
    }
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = () => dispatch({ type: "login" });
    const logout = () => dispatch({ type: "logout" });

    return (
        <AuthContext.Provider value={{ auth: state.auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}