import { createContext, useEffect, useReducer } from 'react';
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null
};

export const authContext = createContext(INITIAL_STATE);

//reducer function to make the code  logics

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null
            }

        default:
            return state;
    }

}

//this helps to provide the payload
export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user]);

    return (
        <authContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch
        }} >
            {children}
        </authContext.Provider>
    )

}