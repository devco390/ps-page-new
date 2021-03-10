import React, { useState } from "react";
import { logoutGmail } from "firebase/Client";
import { useRouter } from "next/router";

const BACK_OFFICE_NAME = "kitty";

const logout = () => {
  logoutGmail()
    .then(() => {
      router.replace(`/${BACK_OFFICE_NAME}/login`);
      setUser(null);
    })
    .catch((err) => {
      console.error(err);
    });
};
const UserContext = React.createContext({ logout });

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
