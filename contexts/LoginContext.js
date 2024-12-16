import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <LoginContext.Provider value={{ isAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
}
