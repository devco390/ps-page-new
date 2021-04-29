import { useContext } from "react";

import * as S from "./styles";

import { UserProvider, UserContext } from "context/UserContext";

const Base = () => {
  const { logout } = useContext(UserContext);

  return (
    <S.Wrapper>
      <UserProvider>
        <button onClick={logout}>Logout</button>
      </UserProvider>
    </S.Wrapper>
  );
};

export default Base;
