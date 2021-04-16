import { useContext } from "react";

import { UserProvider, UserContext } from "context/UserContext";

const Base = () => {
  // const { logout } = useContext(UserContext);
  console.log(useContext(UserContext));

  return (
    <div>
      <UserProvider>
        {/* <button onClick={logout}>Logout</button> */}
      </UserProvider>
    </div>
  );
};

export default Base;
