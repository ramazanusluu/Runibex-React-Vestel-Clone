import { useState, createContext, useEffect, useContext } from "react";
import { fetchLogout } from "../api";

const AuthContext = createContext();

const defaultUser = JSON.parse(localStorage.getItem("user"));

const AuthProvider = ({ children }) => {
  // User => Kayıt olduğunda veya giriş yaptığında user detay bilgileri buraya yazılacak
  // loggedIn => O an login mi değil mi ? bunu tutan state
  const [user, setUser] = useState(defaultUser);
  const [loggedIn, setLoggedIn] = useState(user ? true : false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [loggedIn]);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);
  };
  const logout = async () => {
    setLoggedIn(false);
    setUser(null);
    await fetchLogout();
    localStorage.removeItem("user");
  };
  const values = {
    loggedIn,
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
