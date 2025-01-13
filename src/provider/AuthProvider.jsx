import { createContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  //   const [user, setUser] = useState();
  const name = israk;
  const authInfo = {
    // user,
    name,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
