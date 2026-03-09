import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  // we are creating a hook by this we can use it easily from everywhere in the application

  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
