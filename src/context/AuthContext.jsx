import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const initialState = { auth: false};

const authReducer = (state, action) => {
    if(action.type==='login'){
        return {...state, auth: true};
    } else if(action.type==='logout'){
        return {...state, auth: false };
    } else {
        return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = () => dispatch({ type: "login" });
    const logout = () => dispatch({ type: "logout"});

    return (
        <AuthContext.Provider value={{ auth: state.auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}