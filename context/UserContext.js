import React, { useState } from "react";
import { logoutGmail } from "firebase/Client";

const logout = () => {
  logoutGmail()
    .then(() => {
      console.log("logout success");
    })
    .catch((error) => {
      console.log(`Logout failed ${error}`);
    });
};
const UserContext = React.createContext({ logout });

const UserProvider = ({ children }) => {
  const { user, setUser } = useState();
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
