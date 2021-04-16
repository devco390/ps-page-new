import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  addUser,
  findUserByEmail,
  loginWithGmail,
} from "firebase/client";
import { useRouter } from "next/router";

import { USER_LOGIN_STATES } from "src/components/backOffice/Login/mock";

const BACK_OFFICE_NAME = "kitty";

export const addUser2 = addUser;
export const findUserByEmail2 = findUserByEmail;
export const loginWithGmail2 = loginWithGmail;

export default function useUser() {
  const [user, setUser] = useState(USER_LOGIN_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    if (user === USER_LOGIN_STATES.NOT_LOGGED) {
      router.replace(`/${BACK_OFFICE_NAME}/login`);
    } else if (user) {
      router.replace(`/${BACK_OFFICE_NAME}`);
    }
  }, [user]);

  return user;
}
