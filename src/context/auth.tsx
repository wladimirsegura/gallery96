import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { FC, createContext, useState } from "react";
import { auth } from "../firebase/config";

// create context
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
});

// create provider
interface AuthProviderProps {
  children: React.ReactElement;
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | any>(null);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setisLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
