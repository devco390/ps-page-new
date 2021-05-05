import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  logoutGmail,
  getLocalStorageUserInfo,
} from "firebase/Client";
import { useRouter } from "next/router";

import { USER_LOGIN_STATES } from "src/components/backOffice/Login/mock";

const BACK_OFFICE_NAME = "v8";

export default function useUser() {
  const [user, setUser] = useState(USER_LOGIN_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    if (getLocalStorageUserInfo() === undefined) {
      logout();
    } else {
      onAuthStateChanged(setUser);
    }
  }, []);

  useEffect(() => {
    if (user === USER_LOGIN_STATES.NOT_LOGGED) {
      router.replace(`/${BACK_OFFICE_NAME}/login`);
    } else if (user) {
      router.replace(`/${BACK_OFFICE_NAME}`);
    }
  }, [user]);

  const logout = () => {
    logoutGmail()
      .then(() => {
        console.log("logout success");
      })
      .catch((error) => {
        console.log(`Logout failed ${error}`);
      });
  };

  return { user, logout };
}
