import { createContext } from "react";

export const AuthConText = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {};

  return (
    <AuthConText.Provider value={authInfo}>
        {children}
        </AuthConText.Provider>
  );
};

export default AuthProvider;
