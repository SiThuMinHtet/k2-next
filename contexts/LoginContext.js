import { createContext, useContext, useState } from 'react'

const LoginContext = createContext()

export function LoginProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (email, password) => {
    // Implement login logic here
    console.log('Logging in with:', email, password)
    setIsAuthenticated(true)
  }

  const logout = () => {
    // Implement logout logic here
    setIsAuthenticated(false)
  }

  return (
    <LoginContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => {
  const context = useContext(LoginContext)
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginProvider')
  }
  return context
}

