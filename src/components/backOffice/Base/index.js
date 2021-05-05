import { useEffect, useState } from "react";

import Logo from "src/components/Logo";

import * as S from "./styles";

import UserContext from "context/UserContext";
import useUser from "hooks/useUser";

const Base = () => {
  const { logout, user } = useUser();
  const [isOpen, setIsOpen] = useState(true);

  // console.log(user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ logout, user }}>
      <S.Wrapper>
        <S.Header>
          <div>
            <S.IconHamburger
              className={isOpen ? "open" : "close"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <i></i>
              <i></i>
              <i></i>
            </S.IconHamburger>
            <S.WrapperLogo>
              <Logo white={true} />
            </S.WrapperLogo>
          </div>
          <S.LogoutWrapper>
            [{user && user.userName}]
            <button onClick={logout}>Cerrar sesión</button>
          </S.LogoutWrapper>
        </S.Header>

        <S.Main>
          <S.Sidebar className={isOpen ? "open" : "close"}>
            <S.Nav>
              <ul>
                <li>Ips</li>
                <li>Call to acitons</li>
              </ul>
            </S.Nav>
          </S.Sidebar>
          <S.Content></S.Content>
        </S.Main>
      </S.Wrapper>
    </UserContext.Provider>
  );
};

export default Base;
