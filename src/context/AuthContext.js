import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    // const [authState, setAuthState] = useState({ isAuthenticated: false })
    const [isAuthenticated, setisAuthenticated] = useState(true)
    const userType = "3"

    const value = {
        isAuthenticated,
        userType
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context
}