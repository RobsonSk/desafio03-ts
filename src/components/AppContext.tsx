import { api } from '../api';
import { createContext, useEffect, useState } from "react"

interface IAppContext {
  isLoggedIn: boolean,
  login: (email: string, password: string, name?: string) => void;
  logout: () => void;
}

const AppContext = createContext<IAppContext>({ login: () => {}, isLoggedIn: false, logout: () => {} });

const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string, name?: string) => {
    const   userData = await api;
    localStorage.setItem('user', JSON.stringify({ email, password, name }));
    setIsLoggedIn(true);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ login, isLoggedIn, logout }}>
      {children}
    </AppContext.Provider>
  )
}

export { AuthProvider, AppContext };