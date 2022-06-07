import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const localUser = localStorage.getItem('user')
        if (localUser) {
          setUser(JSON.parse(localUser));
          setIsAuthenticated(true);
          setIsLoggedIn(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
    }, [token])

    return(
        <AuthContext.Provider value={{
            user,
            isLoading,
            isLoggedIn,
            isAuthenticated,
            setUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}