import { createContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState({
        usuario: 'João',
        perfil: 'admin'
    })

    return (
        <AuthContext.Provider value={{usuario, setUsuario}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext