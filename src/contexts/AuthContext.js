import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // User => Kayıt olduğunda veya giriş yaptığında user detay bilgileri buraya yazılacak
  // loggedIn => O an login mi değil mi ? bunu tutan state
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);
  };
  const values = {
    loggedIn,
    user,
    login,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
