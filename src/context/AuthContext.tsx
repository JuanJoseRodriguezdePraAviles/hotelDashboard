import React, { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

interface AuthState {
    auth: boolean;
    token: string | null;
}

type AuthAction = { type: "login"; token: string } | { type: "logout" };

interface AuthContextType {
    auth: boolean;
    token: string | null,
    login: (token: string, username: string) => void;
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

const initialState: AuthState = { auth: false, token: null };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    if (action.type === 'login') {
        return { ...state, auth: true, token: action.token };
    } else if (action.type === 'logout') {
        return { ...state, auth: false, token: null };
    } else {
        return state;
    }
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (token: string, username: string) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("login", "true");
        localStorage.setItem("username", username)
        dispatch({ type: "login", token });
    }
    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("login");
        dispatch({ type: "logout" });
    }

    return (
        <AuthContext.Provider value={{ auth: state.auth, token: state.token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}